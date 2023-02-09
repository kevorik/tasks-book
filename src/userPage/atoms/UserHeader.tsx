import { Dropdown, MenuProps, Space } from "antd";
import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import pic2 from "../../image/header__avatar.svg";
import {
  SettingOutlined,
  UserOutlined,
  StarOutlined,
  ExportOutlined,
  DownOutlined,
} from "@ant-design/icons";
export type User = {
  children: ReactNode;
};

export const UserHeader = (props: User): JSX.Element => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: (
        <a onClick={() => navigate("/user")} target="/" rel="/">
          <UserOutlined /> Личный кабинет
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Темный режим
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer">
          <SettingOutlined /> Настройки
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a
          style={{ color: "#29A19C" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StarOutlined /> Премиум
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a onClick={() => navigate("/")} target="/" rel="/">
          <ExportOutlined /> Выйти
        </a>
      ),

      key: "4",
    },
  ];
  return (
    <div style={styles.user as React.CSSProperties}>
      <div style={styles.text1}>Хорошего дня, username</div>
      <img src={pic2} />
      <Dropdown
        overlayStyle={{ backgroundColor: "var(--background-color)" }}
        menu={{ items }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>{<DownOutlined />}</Space>
        </a>
      </Dropdown>
    </div>
  );
};

const styles = {
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "20%",
    height: "44px",
  },
  text1: {
    width: "60%",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    color: "var(--button-text-color)",
  },
  dropdown: {
    backgroundColor: "var(--background-color)",
  },
};
