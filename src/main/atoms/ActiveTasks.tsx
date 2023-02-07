import { Card } from "antd";
import React, { ReactNode } from "react";
export type Active = {
  children: ReactNode;
};

export const ActiveTasks = (props: Active): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.taskTasks as React.CSSProperties}>
      <div style={styles.tableTasks as React.CSSProperties}>
        <Card style={{ width: "100%" }}>
          <Card.Grid style={styles.gridStyle as React.CSSProperties}>
            <div style={styles.textTasks}>Приготовить вкусный ужин</div>
          </Card.Grid>
        </Card>
        <Card style={{ width: "100%" }}>
          <Card.Grid style={styles.gridStyle as React.CSSProperties}>
            <div style={styles.textTasks}>Устранить засор в раковине</div>
          </Card.Grid>
        </Card>
        <Card style={{ width: "100%" }}>
          <Card.Grid style={styles.gridStyle as React.CSSProperties}>
            <div style={styles.textTasks}>Стирка белого белья </div>
          </Card.Grid>
        </Card>
        <Card style={{ width: "100%" }}>
          <Card.Grid style={styles.gridStyle as React.CSSProperties}>
            <div style={styles.textTasks}>Разморозить холодильник</div>
          </Card.Grid>
        </Card>
      </div>
    </div>
  );
};
const styles = {
  taskTasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "100%",
    height: "226px",
  },
  tableTasks: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "49px",
    display: "flex",
    // cursor: "pointer",
  },
  textTasks: {
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
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
