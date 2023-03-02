import React from "react";

const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: Add {isIncome ? 'Income' : 'Expense'} for {isIncome ? '100' : '800'} rupees in category {isIncome ? 'Salary' : 'Business'} for {isIncome ? 'today' : 'next Monday'}
    </div>
  );
};

export default InfoCard;
