import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ButtonRightColumn } from "../atoms/ButtonRightColumn";
import { FactRightColumn } from "../atoms/FactRightColumn";
import { TimeRightColumn } from "../atoms/TimeRightColumn";
import { WatchingRightColumn } from "../atoms/WatchingRightColumn";

export type RightColumn = {
  children: ReactNode;
};

export const RightColumnUserPage = (props: RightColumn): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.rightColumn as React.CSSProperties}>
      <ButtonRightColumn children={children} />
      <TimeRightColumn children={children} />
      <WatchingRightColumn children={children} />
      <FactRightColumn children={children} />
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
};
