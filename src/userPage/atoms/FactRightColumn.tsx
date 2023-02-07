import React, { ReactNode } from "react";
export type Fact = {
  children: ReactNode;
};

export const FactRightColumn = (props: Fact): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.fact as React.CSSProperties}>
      <div style={styles.titleFact as React.CSSProperties}>
        <div style={styles.textFact}>Факт дня</div>
      </div>
      <div style={styles.contentTextFact as React.CSSProperties}>
        <div style={styles.textFact1}>
          Человек, который просыпается в 6 утра, по статистике, закрывает все
          задачи к 18:00 вечера. Попробуем также 🤔?
        </div>
      </div>
    </div>
  );
};
const styles = {
  fact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "148px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08",
    borderRadius: "10px",
  },
  titleFact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "25px",
  },
  textFact: {
    width: "100%",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  contentTextFact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "63px",
  },
  textFact1: {
    width: "100%",
    height: "63px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
};
