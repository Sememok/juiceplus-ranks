/* bonus-calculator.js - מחשבון רווחים מפורט */

// הגדרות בונוסים לפי דרגה
window.BONUS_CONFIG = {
  // עמלת מכירה - 10% על כל ההזמנות
  salesCommission: 0.10,
  
  // עמלות צוות לפי דרגה של הזכיין
  teamCommissions: {
    partner: { rate: 0, label: "Partner" },
    partner_plus: { rate: 0.04, label: "Partner Plus+" },
    senior_partner: { rate: 0.05, label: "Senior Partner" },
    sales_coordinator: { rate: 0.05, label: "Sales Coordinator" },
    qssc: { rate: 0.05, label: "QSSC" },
    ssc: { rate: 0.05, label: "SSC" },
    qnmd: { rate: 0.05, label: "QNMD" },
    nmd: { rate: 0.05, label: "NMD" },
    imd: { rate: 0.05, label: "IMD" },
    emd: { rate: 0.05, label: "EMD" },
    pmd: { rate: 0.05, label: "PMD" },
    pmd_plus: { rate: 0.05, label: "PMD+" }
  },
  
  // בונוס PB לפי דור
  pbBonus: {
    minPB: 5000, // מינימום נקודות PB נדרש
    rates: {
      1: 0.03, // דור 1 - 3%
      2: 0.04, // דור 2 - 4%
      3: 0.04, // דור 3 - 4%
      4: 0.04, // דור 4 - 4%
      5: 0.04  // דור 5 - 4%
    },
    eligibleRanks: ["senior_partner", "sales_coordinator", "qssc", "ssc", "qnmd", "nmd", "imd", "emd", "pmd", "pmd_plus"]
  },
  
  // בונוס POB
  pobBonus: {
    minPOB: 20000, // מינימום נקודות POB נדרש
    rate: 0.03, // 3%
    eligibleRanks: ["sales_coordinator", "qssc", "ssc", "qnmd", "nmd", "imd", "emd", "pmd", "pmd_plus"]
  },
  
  // בונוס BIB לפי דרגה ומספר רגלי PB
  bibBonus: {
    rates: {
      qssc: { 1: 0.05, 2: 0.10, 3: 0.15, 4: 0.20, max: 1500 },
      ssc: { 1: 0.05, 2: 0.10, 3: 0.15, 4: 0.20, max: 2300 },
      qnmd: { 2: 0.05, 3: 0.10, 4: 0.15, 5: 0.20, max: 3800 },
      nmd: { 2: 0.05, 3: 0.10, 4: 0.15, 5: 0.20, max: 9600 },
      imd: { 2: 0.05, 3: 0.10, 4: 0.15, 5: 0.20, max: 9600 },
      emd: { 2: 0.05, 3: 0.10, 4: 0.15, 5: 0.20, max: 9600 },
      pmd: { 2: 0.05, 3: 0.10, 4: 0.15, 5: 0.20, max: 9600 },
      pmd_plus: { 2: 0.05, 3: 0.10, 4: 0.15, 5: 0.20, max: 9600 }
    }
  },
  
  // בונוס הסמכת דרגה
  rankBonuses: {
    partner_plus: { months: [400], total: 400 },
    senior_partner: { months: [400, 800], total: 1200 },
    sales_coordinator: { months: [1200, 2400], total: 3600 },
    qssc: { months: [1400, 1400, 2000], total: 4800 },
    ssc: { months: [2500, 2500, 5000], total: 10000 },
    qnmd: { months: [4500, 4500, 10000], total: 19000 },
    nmd: { months: [9500, 9500, 20000], total: 39000 },
    imd: { months: [77000], total: 77000 },
    emd: { months: [115000], total: 115000 },
    pmd: { months: [153000], total: 153000 },
    pmd_plus: { months: [200000], total: 200000 }
  },
  
  // צבעים לתצוגה ויזואלית
  colors: {
    salesCommission: "#3b82f6", // כחול
    teamCommission: "#22c55e",  // ירוק
    pbBonus: "#a855f7",         // סגול
    pobBonus: "#f97316",        // כתום
    bibBonus: "#ec4899",        // ורוד
    rankBonus: "#eab308"        // זהב
  }
};

// פונקציה לחישוב כל הבונוסים מעץ
function calculateTreeBonuses(treeData, rankId) {
  const config = window.BONUS_CONFIG;
  const results = {
    salesCommission: 0,
    teamCommission: 0,
    pbBonus: 0,
    pobBonus: 0,
    bibBonus: 0,
    rankBonus: 0,
    total: 0,
    details: []
  };
  
  if (!treeData || !treeData.nodes) return results;
  
  // מחיר ממוצע לנקודה (בערך 1.27 ש"ח לנקודה לפי טבלת המוצרים)
  const pricePerPoint = 1.27;
  
  // חישוב עמלת מכירה על לקוחות
  const clientNodes = treeData.nodes.filter(n => n.code === "Client" || n.code === "לקוח");
  const clientPV = clientNodes.reduce((sum, n) => sum + (n.pv || 0), 0);
  results.salesCommission = clientPV * pricePerPoint * config.salesCommission;
  
  if (clientPV > 0) {
    results.details.push({
      type: "salesCommission",
      label: "עמלת מכירה (10%)",
      pv: clientPV,
      amount: results.salesCommission,
      color: config.colors.salesCommission
    });
  }
  
  // חישוב עמלת צוות על זכיינים
  const partnerNodes = treeData.nodes.filter(n => 
    n.code && !["Client", "לקוח"].includes(n.code) && n.id !== "you"
  );
  
  // עמלת צוות - 4-5% על הזמנות של זכיינים תחתיך
  const teamPV = partnerNodes.reduce((sum, n) => sum + (n.pv || 0), 0);
  const teamRate = config.teamCommissions[rankId]?.rate || 0.05;
  results.teamCommission = teamPV * pricePerPoint * teamRate;
  
  if (teamPV > 0 && teamRate > 0) {
    results.details.push({
      type: "teamCommission",
      label: `עמלת צוות (${(teamRate * 100).toFixed(0)}%)`,
      pv: teamPV,
      amount: results.teamCommission,
      color: config.colors.teamCommission
    });
  }
  
  // חישוב בונוס PB
  if (config.pbBonus.eligibleRanks.includes(rankId)) {
    // חישוב נקודות PB - מ-P ו-P+ בלבד
    const pbEligibleNodes = treeData.nodes.filter(n => 
      ["P", "P+", "Partner", "Partner Plus"].includes(n.code) || n.code === "Client" || n.code === "לקוח"
    );
    const pbPV = pbEligibleNodes.reduce((sum, n) => sum + (n.pv || 0), 0);
    
    if (pbPV >= config.pbBonus.minPB) {
      // חישוב לפי דורות (פשוט - דור 1 = generation 1)
      let pbTotal = 0;
      treeData.nodes.forEach(node => {
        if (node.id !== "you" && node.generation && node.generation <= 5) {
          const rate = config.pbBonus.rates[node.generation] || 0;
          pbTotal += (node.pv || 0) * pricePerPoint * rate;
        }
      });
      results.pbBonus = pbTotal;
      
      if (pbTotal > 0) {
        results.details.push({
          type: "pbBonus",
          label: "בונוס PB (3-4%)",
          pv: pbPV,
          amount: pbTotal,
          color: config.colors.pbBonus
        });
      }
    }
  }
  
  // חישוב בונוס POB
  if (config.pobBonus.eligibleRanks.includes(rankId)) {
    // מציאת SC ומעלה בארגון
    const scNodes = treeData.nodes.filter(n => 
      ["SC", "QSSC", "SSC", "QNMD", "NMD", "IMD", "EMD", "PMD", "PMD+"].includes(n.code)
    );
    const pobPV = scNodes.reduce((sum, n) => sum + (n.pv || 0), 0);
    
    if (pobPV > 0) {
      results.pobBonus = pobPV * pricePerPoint * config.pobBonus.rate;
      results.details.push({
        type: "pobBonus",
        label: "בונוס POB (3%)",
        pv: pobPV,
        amount: results.pobBonus,
        color: config.colors.pobBonus
      });
    }
  }
  
  // בונוס הסמכת דרגה
  if (config.rankBonuses[rankId]) {
    results.rankBonus = config.rankBonuses[rankId].total;
    results.details.push({
      type: "rankBonus",
      label: "בונוס הסמכת דרגה",
      pv: null,
      amount: results.rankBonus,
      color: config.colors.rankBonus
    });
  }
  
  // סה"כ
  results.total = results.salesCommission + results.teamCommission + 
                  results.pbBonus + results.pobBonus + results.rankBonus;
  
  return results;
}

// פונקציה לקבלת צבע הבונוס לצומת
function getNodeBonusColors(node, rankId) {
  const config = window.BONUS_CONFIG;
  const colors = [];
  
  // לקוחות - עמלת מכירה
  if (node.code === "Client" || node.code === "לקוח") {
    colors.push({ color: config.colors.salesCommission, label: "עמלת מכירה 10%" });
  }
  
  // זכיינים - עמלת צוות
  if (node.id !== "you" && !["Client", "לקוח"].includes(node.code)) {
    colors.push({ color: config.colors.teamCommission, label: "עמלת צוות" });
    
    // PB - רק על P ו-P+
    if (["P", "P+", "Partner", "Partner Plus"].includes(node.code)) {
      if (config.pbBonus.eligibleRanks.includes(rankId)) {
        colors.push({ color: config.colors.pbBonus, label: "בונוס PB" });
      }
    }
    
    // POB - רק על SC ומעלה
    if (["SC", "QSSC", "SSC", "QNMD", "NMD", "IMD", "EMD", "PMD", "PMD+"].includes(node.code)) {
      if (config.pobBonus.eligibleRanks.includes(rankId)) {
        colors.push({ color: config.colors.pobBonus, label: "בונוס POB" });
      }
    }
  }
  
  return colors;
}

// ייצוא לשימוש גלובלי
window.calculateTreeBonuses = calculateTreeBonuses;
window.getNodeBonusColors = getNodeBonusColors;
