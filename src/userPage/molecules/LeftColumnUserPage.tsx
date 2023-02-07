import React, { ReactNode } from "react";
import { PhotoUser } from "../atoms/PhotoUser";
import { RightLeftColumn } from "../atoms/RightLeftColumn";
export type LeftColumn = {
  children: ReactNode;
};
export const LeftColumnUserPage = (props: LeftColumn): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.leftColumn as React.CSSProperties}>
      <PhotoUser children={children} />
      <RightLeftColumn children={children} />
    </div>
  );
};
const styles = {
  leftColumn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    background: "var(--background)",
    borderRadius: "10px",
    width: "50%",
  },
};
