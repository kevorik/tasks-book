import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
export type Watching = {
  children: ReactNode;
};

export const WatchingRightColumn = (props: Watching): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.watching as React.CSSProperties}>
      <div style={styles.titleWatching as React.CSSProperties}>
        <div style={styles.text10}>Наблюдение</div>
      </div>
      <div style={styles.statistic as React.CSSProperties}>
        <div style={styles.textStatistic}>
          Больше всего задач вы <Link to={""}>создаете</Link> в Понедельник{" "}
        </div>
        <div style={styles.textStatistic1}>
          Больше всего задач вы завершаете во Вторник
        </div>
      </div>
    </div>
  );
};
const styles = {
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
};
