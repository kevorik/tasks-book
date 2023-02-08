import { Button, Card } from "antd";
import React, { ReactNode, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";

export type Active = {
  children: ReactNode;
};

export const ActiveTasks = (props: Active): JSX.Element => {
  const { children } = props;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const mouseHover = () => setShow((prev) => !prev);
  const mouseHover1 = () => setShow1((prev) => !prev);
  const mouseHover2 = () => setShow2((prev) => !prev);
  const mouseHover3 = () => setShow3((prev) => !prev);

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div style={styles.taskTasks as React.CSSProperties}>
      <div style={styles.tableTasks as React.CSSProperties}>
        <Card
          hoverable
          onMouseEnter={mouseHover}
          onMouseLeave={mouseHover}
          style={{ width: "100%" }}
        >
          <Card.Grid style={styles.gridStyle as React.CSSProperties}>
            {show ? <Checkbox onChange={onChange} /> : null}
            <div style={styles.textTasks}>Приготовить вкусный ужин</div>
            {show ? (
              <button style={{ border: "none", background: "none" }}>
                <EditOutlined
                  style={{
                    color: "var(--icon-color-edit)",
                  }}
                />
              </button>
            ) : null}
            {show ? (
              <button
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                <DeleteOutlined
                  style={{
                    color: "var(--icon-color-delete)",
                  }}
                />
              </button>
            ) : null}
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
            <div style={styles.textTasks}>Устранить засор в раковине</div>
            {show1 ? (
              <button style={{ border: "none", background: "none" }}>
                <EditOutlined
                  style={{
                    color: "var(--icon-color-edit)",
                  }}
                />
              </button>
            ) : null}
            {show1 ? (
              <button
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                <DeleteOutlined
                  style={{
                    color: "var(--icon-color-delete)",
                  }}
                />
              </button>
            ) : null}
          </Card.Grid>
        </Card>
        <Card
          hoverable
          onMouseEnter={mouseHover2}
          onMouseLeave={mouseHover2}
          style={{ width: "100%" }}
        >
          <Card.Grid style={styles.gridStyle as React.CSSProperties}>
            {show2 ? <Checkbox onChange={onChange} /> : null}
            <div style={styles.textTasks}>Стирка белого белья </div>
            {show2 ? (
              <button style={{ border: "none", background: "none" }}>
                <EditOutlined
                  style={{
                    color: "var(--icon-color-edit)",
                  }}
                />
              </button>
            ) : null}
            {show2 ? (
              <button
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                <DeleteOutlined
                  style={{
                    color: "var(--icon-color-delete)",
                  }}
                />
              </button>
            ) : null}
          </Card.Grid>
        </Card>
        <Card
          hoverable
          onMouseEnter={mouseHover3}
          onMouseLeave={mouseHover3}
          style={{ width: "100%" }}
        >
          <Card.Grid style={styles.gridStyle as React.CSSProperties}>
            {show3 ? <Checkbox onChange={onChange} /> : null}
            <div style={styles.textTasks}>Разморозить холодильник</div>
            {show3 ? (
              <button style={{ border: "none", background: "none" }}>
                <EditOutlined
                  style={{
                    color: "var(--icon-color-edit)",
                  }}
                />
              </button>
            ) : null}
            {show3 ? (
              <button
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                <DeleteOutlined
                  style={{
                    color: "var(--icon-color-delete)",
                  }}
                />
              </button>
            ) : null}
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
    width: "100%",
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
    borderRadius: "7px",
    // cursor: "pointer",
  },
};
