import React, { ReactNode } from "react";
import { FieldTimeOutlined, CalendarOutlined } from "@ant-design/icons";
export type Time = {
  children: ReactNode;
};

export const TimeRightColumn = (props: Time): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.time as React.CSSProperties}>
      <div style={styles.title as React.CSSProperties}>
        <div style={styles.text7}> Такс такс такс</div>
      </div>
      <div style={styles.timeAndDate as React.CSSProperties}>
        <div style={styles.time1 as React.CSSProperties}>
          <div style={styles.text8}>На часах у нас</div>
          <div style={styles.tableTime as React.CSSProperties}>
            <FieldTimeOutlined style={{ color: "var(--button-text-color)" }} />
            <div style={styles.textTime}>12:30:43</div>
          </div>
        </div>
        <div style={styles.date as React.CSSProperties}>
          <div style={styles.text9}>А сегодня у нас</div>
          <div style={styles.tableDate as React.CSSProperties}>
            <CalendarOutlined style={{ color: "var(--button-text-color)" }} />
            <div style={styles.textDate}>5 апреля 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  time: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "143px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "25px",
  },
  text7: {
    display: "flex",
    // justifyContent: "center",
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
  timeAndDate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0px",
    gap: "71px",
    width: "100%",
    height: "58px",
  },
  time1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    // gap: "5px",
    width: "100%",
    height: "58px",
  },
  text8: {
    width: "100%",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  tableTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "34px",
  },
  textTime: {
    width: "100%",
    height: "34px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "34px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    // gap: "5px",
    width: "100%",
    height: "58px",
  },
  text9: {
    width: "100%",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  tableDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "34px",
  },
  textDate: {
    width: "100%",
    height: "34px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "34px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
};
