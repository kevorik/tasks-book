import React, { ReactNode } from "react";
import { FieldTimeOutlined, CalendarOutlined } from "@ant-design/icons";
import pic11 from "../../image/График.svg";
import { Link } from "react-router-dom";

export type RightColumn = {
  children: ReactNode;
};

export const RightColumnMainPage = (props: RightColumn): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.rightColumn as React.CSSProperties}>
      <div style={styles.time as React.CSSProperties}>
        <div style={styles.title as React.CSSProperties}>
          {/* <div style={styles.textTasks}>
                    {activeTasls.map((task) => (
                      <div key={task.name}></div>
                    ))}
                  </div> */}
          <div style={styles.text7}> Такс такс такс</div>
        </div>
        <div style={styles.timeAndDate as React.CSSProperties}>
          <div style={styles.time1 as React.CSSProperties}>
            <div style={styles.text8}>На часах у нас</div>
            <div style={styles.tableTime as React.CSSProperties}>
              <FieldTimeOutlined
                style={{ color: "var(--button-text-color)" }}
              />
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
      <div style={styles.watching as React.CSSProperties}>
        <div style={styles.titleWatching as React.CSSProperties}>
          <div style={styles.text10}>Наблюдение</div>
        </div>
        <div style={styles.statistic as React.CSSProperties}>
          <div style={styles.textStatistic}>
            Больше всего задач вы <Link to={"create"}>создаете</Link> в
            Понедельник
          </div>
          <div style={styles.textStatistic1}>
            Больше всего задач вы завершаете во Вторник
          </div>
        </div>
      </div>
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
      <div style={styles.graphic as React.CSSProperties}>
        <div style={styles.titleGraphic as React.CSSProperties}>
          <div style={styles.textGraphic}>График успеваемости</div>
        </div>
        <div style={styles.graphGraphic as React.CSSProperties}>
          <img
            style={{
              width: "100%",
              height: "100%",
              color: "var(--button-text-color)",
            }}
            src={pic11}
          />
        </div>
      </div>
    </div>
  );
};
const styles = {
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "30px",
    paddingRight: "20px",
    gap: "30px",
    width: "50%",
    height: "556px",
    filter: "drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px)",
    background: "var(--background-color)",
  },
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
  watching: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "133px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  titleWatching: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "25px",
  },
  text10: {
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
  statistic: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "48px",
  },
  textStatistic: {
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
  textStatistic1: {
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
  graphic: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "256px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  titleGraphic: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "189px",
    height: "25px",
  },
  textGraphic: {
    width: "189px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  graphGraphic: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "171px",
  },
};
