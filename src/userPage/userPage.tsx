import { ConfigProvider, Layout } from "antd";
import { ReactNode } from "react";
import { SiderUser } from "./organism/Sider";
import { HeaderUser } from "./organism/Header";
import { ContentUser } from "./organism/Content";

type UserAccountPage = {
  children?: ReactNode;
};

const UserAccount: React.FC = (props: UserAccountPage) => {
  const { children } = props;

  return (
    <ConfigProvider
      theme={{
        token: { colorBgContainer: "#2C3440" },
      }}
    >
      <Layout style={{ height: "100vh" }}>
        <SiderUser children={children} />
        <Layout
          style={{ paddingLeft: "50px", background: "var(--background-color)" }} // background: "rgb(255, 255, 255)"
        >
          <HeaderUser children={children} />
          <ContentUser children={children} />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default UserAccount;
