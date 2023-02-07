import { Content } from "antd/es/layout/layout";
import React, { ReactNode } from "react";
import { LeftColumnMainPage } from "../molecules/LeftColumnMainPage";
import { RightColumnMainPage } from "../molecules/RightColumnMainPage";
export type ContentMain = {
  children: ReactNode;
};

export const ContentMainPage = (props: ContentMain): JSX.Element => {
  const { children } = props;

  return (
    <Content style={styles.content as React.CSSProperties}>
      <LeftColumnMainPage children={children} />
      <RightColumnMainPage children={children} />
    </Content>
  );
};
const styles = {
  content: {
    marginTop: "24px",
    minHeight: 280,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
};
