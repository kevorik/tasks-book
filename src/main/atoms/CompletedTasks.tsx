import { Card } from "antd";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { ReactNode, useState } from "react";
export type Completed = {
  children: ReactNode;
};

export const CompletedTasks = (props: Completed): JSX.Element => {
  const { children } = props;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const mouseHover = () => setShow((prev) => !prev);
  const mouseHover1 = () => setShow1((prev) => !prev);

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div style={styles.completedTasks as React.CSSProperties}>
      <div style={styles.titleCompletedTasks}>Завершенные задачи</div>
      <Card
        hoverable
        onMouseEnter={mouseHover}
        onMouseLeave={mouseHover}
        style={{ width: "100%" }}
      >
        <Card.Grid style={styles.gridStyle as React.CSSProperties}>
          {show ? <Checkbox onChange={onChange} /> : null}
          <div style={styles.textCompletedTasks}>Полить цветы</div>
        </Card.Grid>
      </Card>
      <Card
        hoverable
        onMouseEnter={mouseHover1}
        onMouseLeave={mouseHover1}
        style={{ width: "100%" }}
      >
        <Card.Grid style={styles.gridStyle as React.CSSProperties}>
          {show1 ? <Checkbox onChange={onChange} /> : null}
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
