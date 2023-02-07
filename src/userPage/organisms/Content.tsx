import { Content } from "antd/es/layout/layout";
import { ReactNode } from "react";
import { LeftColumnUserPage } from "../molecules/LeftColumnUserPage";
import { RightColumnUserPage } from "../molecules/RightColumnUserPage";
export type Content = {
  children: ReactNode;
};

export const ContentUser = (props: Content): JSX.Element => {
  const { children } = props;

  return (
    <Content style={styles.content as React.CSSProperties}>
      <LeftColumnUserPage children={children} />
      <RightColumnUserPage children={children} />
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
