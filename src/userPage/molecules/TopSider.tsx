import React, { ReactNode } from "react";
import pic5 from "../../image/Логотип.svg";

export type Sider = {
  children: ReactNode;
};

export const TopSider = (props: Sider): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.topLayout as React.CSSProperties}>
      <img style={{ width: "119px", height: "54px" }} src={pic5} />
      {/* {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )} */}
    </div>
  );
};
const styles = {
  topLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "60px",
    width: "119px",
    height: "54px",
    paddingTop: "20px",
    paddingLeft: "20px",
  },
};
