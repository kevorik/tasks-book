import React, { ReactNode } from "react";
import { ActiveTasks } from "../atoms/ActiveTasks";
import { CompletedTasks } from "../atoms/CompletedTasks";
import { WeeklyProgress } from "../atoms/WeeklyProgress";
import { DashOutlined } from "@ant-design/icons";

export type LeftColumn = {
  children: ReactNode;
};

export const LeftColumnMainPage = (props: LeftColumn): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.leftColumn as React.CSSProperties}>
      <WeeklyProgress children={children} />
      <div style={styles.tasks as React.CSSProperties}>
        <div style={styles.activeTasks as React.CSSProperties}>
          <div style={styles.titleTasks}>Активные задачи</div>
          <DashOutlined
            style={{ fontSize: "30px", color: "var(--button-text-color)" }}
          />
        </div>
        <ActiveTasks children={children} />
        <CompletedTasks children={children} />
      </div>
    </div>
  );
};
const styles = {
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "30px",
    borderRadius: "10px",
    width: "50%",
    background: "var(--background-color)",
  },

  tasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "474px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
    filter: "drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px)",
  },
  activeTasks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    width: "100%",
    height: "25px",
  },
  titleTasks: {
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
};
