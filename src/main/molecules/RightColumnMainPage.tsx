import React, { ReactNode } from "react";
import { TimeRightColumn } from "../../userPage/atoms/TimeRightColumn";
import { WatchingRightColumn } from "../../userPage/atoms/WatchingRightColumn";
import { FactRightColumn } from "../../userPage/atoms/FactRightColumn";
import { GraphicRightColumn } from "../atoms/GraphicRightColumnMain";

export type RightColumn = {
  children: ReactNode;
};

export const RightColumnMainPage = (props: RightColumn): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.rightColumn as React.CSSProperties}>
      <TimeRightColumn children={children} />
      <WatchingRightColumn children={children} />
      <FactRightColumn children={children} />
      <GraphicRightColumn children={children} />
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
    // background: "var(--background-color)",
  },
};
