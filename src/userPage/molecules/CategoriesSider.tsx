import { Menu } from "antd";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import pic6 from "../../image/briefcase.svg";
import pic7 from "../../image/zap.svg";
import {
  ExportOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
export type Categories = {
  children: ReactNode;
};

export const CategoriesSider = (props: Categories): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.categories as React.CSSProperties}>
      <div style={styles.textCategories}>Категории</div>

      <Menu
        theme="light"
        mode="inline"
        style={{
          color: "var(--button-text-color)",
          background: "var(--background)",
        }}
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Дом",
          },
          {
            key: "2",
            icon: <UsergroupAddOutlined />,
            label: "Семья",
          },
          {
            key: "3",
            icon: (
              <img src={pic6} style={{ color: "var(--button-text-color)" }} />
            ),
            label: "Работа",
          },
          {
            key: "4",
            icon: (
              <img src={pic7} style={{ color: "var(--button-text-color)" }} />
            ),
            label: "Спорт",
          },
          {
            key: "5",
            icon: <PlusSquareOutlined />,
            label: "Добавить",
          },
        ]}
      />
      <div style={styles.data as React.CSSProperties}>
        <div style={styles.textData}>Данные</div>
        <Menu
          theme="light"
          mode="inline"
          style={{
            color: "var(--button-text-color)",
            background: "var(--background)",
          }}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Статистика",
            },
            {
              key: "2",
              icon: <UsergroupAddOutlined />,
              label: "Сравнить",
            },
          ]}
        />
      </div>
      <div style={styles.exit as React.CSSProperties}>
        <div style={styles.itemExit as React.CSSProperties}>
          <ExportOutlined style={{ color: "var(--button-text-color)" }} />
          <Link style={styles.textExit} to={"/"}>
            Выйти
          </Link>
        </div>
      </div>
    </div>
  );
};
const styles = {
  categories: {
    // display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "20px",
    width: "100%",
    background: "var(--background)",
  },
  textCategories: {
    width: "125px",
    height: "33px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "0.03em",
    color: "#29A19C",
    paddingLeft: "20px",
    paddingBottom: "40px",
  },
  data: {
    // display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "20px",
    width: "100%",
  },
  textData: {
    width: "113px",
    height: "33px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "0.03em",
    color: "#29A19C",
    paddingLeft: "20px",
    paddingBottom: "40px",
  },
  exit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "flex-start",
    paddingLeft: "30px",
    gap: "10px",
    width: "100%",
    height: "360px",
  },
  itemExit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
  },
  textExit: {
    textDecoration: "none",
    width: "85px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.025em",
    color: "var(--button-text-color)",
  },
};
