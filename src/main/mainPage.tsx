import React, { ReactNode, useState } from "react";
import { ConfigProvider, DatePickerProps, Layout, MenuProps } from "antd";
import { SiderUser } from "./organisms/Sider";
import { HeaderUser } from "./organisms/Header";
import { ContentMainPage } from "./organisms/Content";

const { Header, Sider, Content } = Layout;
type MainPage = {
  children?: ReactNode;
};

const MainPage: React.FC = (props: MainPage) => {
  const { children } = props;

  // const [open, setOpen] = useState(false);

  // const showModal = () => {
  //   setOpen(true);
  // };
  // const handleOk = () => {
  //   setOpen(false);
  // };
  // const handleCancel = () => {
  //   console.log("Clicked cancel button");
  //   setOpen(false);
  // };
  // const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  //   console.log(date, dateString);
  // };
  // const handleCard = (gridStyle: any) => {
  //   console.log("gridStyle", gridStyle);

  //   if (gridStyle) {
  //     return <EditOutlined />;
  //   }
  // };

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
          <ContentMainPage children={children} />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainPage;

const styles = {};
