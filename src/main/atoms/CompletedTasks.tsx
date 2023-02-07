import { Card } from "antd";
import React, { ReactNode } from "react";
export type Completed = {
  children: ReactNode;
};

export const CompletedTasks = (props: Completed): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.completedTasks as React.CSSProperties}>
      <div style={styles.titleCompletedTasks}>Завершенные задачи</div>
      <Card style={{ width: "100%" }}>
        <Card.Grid style={styles.gridStyle as React.CSSProperties}>
          <div style={styles.textCompletedTasks}>Полить цветы</div>
        </Card.Grid>
      </Card>
      <Card style={{ width: "100%" }}>
        <Card.Grid style={styles.gridStyle as React.CSSProperties}>
          <div style={styles.textCompletedTasks}>Вызвать сантехника</div>
        </Card.Grid>
      </Card>
    </div>
  );
};
const styles = {
  completedTasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "143px",
  },
  titleCompletedTasks: {
    // width: "186px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  textCompletedTasks: {
    // width: "135px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    textDecorationLine: "line-through",
    color: "var(--button-text-color)",
  },
  gridStyle: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "15px",
    gap: "10px",
    width: "100%",
    height: "49px",
    background: "var(--background)",
    border: "1px solid rgba(40, 40, 70, 0.1)",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
