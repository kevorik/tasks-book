import React, { ReactNode } from "react";
import { ConfigProvider, Layout } from "antd";
import { SiderUser } from "./organisms/Sider";
import { HeaderUser } from "./organisms/Header";
import { ContentMainPage } from "./organisms/Content";

type MainPages = {
  children?: ReactNode;
};

const MainPage: React.FC = (props: MainPages) => {
  const { children } = props;

  return (
    <ConfigProvider
      theme={{
        token: { colorBgContainer: "#2C3440" },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <SiderUser children={children} />
        <Layout
          style={{ paddingLeft: "50px", background: "var(--background-color)" }} // background: "rgb(255, 255, 255)"
        >
          <HeaderUser children={children} />
          <ContentMainPage children={children} />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainPage;
