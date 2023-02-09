import { Form } from "antd";
import React, { ReactNode } from "react";
import { DashOutlined } from "@ant-design/icons";

export type Weekly = {
  children: ReactNode;
};

export const WeeklyProgress = (props: Weekly): JSX.Element => {
  return (
    <Form style={styles.weeklyProgress as React.CSSProperties}>
      <div style={styles.topWeeklyProgress as React.CSSProperties}>
        <div style={styles.titleTopWeeklyProgress}>Успехи за неделю</div>
        <DashOutlined
          style={{ fontSize: "30px", color: "var(--button-text-color)" }}
        />
      </div>
      <div style={styles.circles as React.CSSProperties}>
        <div style={styles.circle as React.CSSProperties}>
          <div style={styles.titleCircle}>Создано</div>
          <div style={styles.taskCircle as React.CSSProperties}>
            <div style={styles.numberTaskCircle}>113</div>
            <div style={styles.bottomTaskCircle}>задач</div>
          </div>
        </div>
        <div style={styles.circle as React.CSSProperties}>
          <div style={styles.titleCircle}>Завершено</div>
          <div style={styles.taskCircle as React.CSSProperties}>
            <div style={styles.numberTaskCircle}>97</div>
            <div style={styles.bottomTaskCircle}>задач</div>
          </div>
        </div>
        <div style={styles.circle as React.CSSProperties}>
          <div style={styles.titleCircle}>Удалено</div>
          <div style={styles.taskCircle as React.CSSProperties}>
            <div style={styles.numberTaskCircle}>14</div>
            <div style={styles.bottomTaskCircle}>задач</div>
          </div>
        </div>
      </div>
    </Form>
  );
};
const styles = {
  weeklyProgress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    // height: "211px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
    filter: "drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px)",
  },
  topWeeklyProgress: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    // gap: "341px",
    width: "100%",
    // height: "25px",
  },
  titleTopWeeklyProgress: {
    // width: "157px",
    // height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  circles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0px",
    // gap: "57px",
    width: "100%",
    height: "126px",
  },
  circle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "100px",
    height: "126px",
  },
  titleCircle: {
    // width: "50px",
    height: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  taskCircle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    width: "100%",
    height: "100px",
    background: "var(--background)",
    border: "1px solid #29A19C",
    borderRadius: "200px",
  },
  numberTaskCircle: {
    // width: "67px",
    height: "49px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "49px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  bottomTaskCircle: {
    // width: "33px",
    height: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
};
