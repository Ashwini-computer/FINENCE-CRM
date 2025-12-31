

// const cheakCAT = (iscompanylisted, isformNo16, isLasttwoyear, isbankstatement1year, MAB, agency, DPD, libility, cibilscore) => {

//     if (iscompanylisted && isformNo16 && isLasttwoyear && isbankstatement1year && MAB >= 20000 && DPD && libility && (
//         (agency === "cibil" && cibilscore >= 750) ||
//         (agency === "crispin" && cibilscore >= 550) ||
//         (agency === "transunion" && cibilscore >= 650)
//     )) {

//         console.log("CAT A");

//     } else if (isbankstatement1year && MAB >= 10000 && DPD && (
//         (agency === "cibil" && cibilscore >= 750) ||
//         (agency === "crispin" && cibilscore >= 550) ||
//         (agency === "transunion" && cibilscore >= 650)
//     )) {

//         console.log("CAT B")
//     } else {
//         console.log("CAT C")
//     }
// }

const checkCAT = (
  isCompanyListed,
  isFormNo16,
  isLastTwoYear,
  isBankStatement1Year,
  MAB,
  agency,
  DPD,
  liability,
  cibilScore
) => {

    const isCibilGood =
    (agency === "cibil" && cibilScore >= 750) ||
    (agency === "crispin" && cibilScore >= 550) ||
    (agency === "transunion" && cibilScore >= 650);

    if (
        isCompanyListed &&
        isFormNo16 &&
        isLastTwoYear &&
        isBankStatement1Year &&
        MAB >= 20000 &&
        DPD &&
    liability &&
    isCibilGood
  ) {
    return "CAT A";
  } else if (
    isBankStatement1Year &&
    MAB >= 10000 &&
    DPD &&
    isCibilGood
  ) {
    return "CAT B";
} else {
    return "CAT C";
  }
};

    checkCAT(iscompanylisted, isformNo16, isLasttwoyear, isbankstatement1year, MAB, agency, DPD, libility, cibilscore)