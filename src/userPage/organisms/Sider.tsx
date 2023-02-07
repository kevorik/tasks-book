import { Layout } from "antd";
import React, { ReactNode, useState } from "react";
import { TopSider } from "../molecules/TopSider";
import { CategoriesSider } from "../molecules/CategoriesSider";
export type Sider = {
  children: ReactNode;
};

export const SiderUser = (props: Sider): JSX.Element => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Sider
      style={{
        background: "var(--background)", //colorBgContainer
        filter: "drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px)",
      }}
      trigger={null}
      width={"15%"}
      collapsible
      collapsed={collapsed}
    >
      <div style={styles.sider as React.CSSProperties}>
        <TopSider children={children} />
        <CategoriesSider children={children} />
      </div>
      {children}
    </Layout.Sider>
  );
};
const styles = {
  sider: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "60px",
  },
};
