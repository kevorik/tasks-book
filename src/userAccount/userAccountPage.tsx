import pic from "../image/Group 1.svg";
import pic1 from "../image/moon.svg";
import pic2 from "../image/header__avatar.svg";
import pic3 from "../image/facebook 1.svg";
import pic4 from "../image/twitter 1.svg";

import {
  ConfigProvider,
  theme,
  Button,
  Card,
  MenuProps,
  Dropdown,
  Space,
  Avatar,
} from "antd";
import React, { useState } from "react";
import {
  SettingOutlined,
  UserOutlined,
  StarOutlined,
  ExportOutlined,
  DownOutlined,
  FieldTimeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
export function UserAccount() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [darkMode, setDarkMode] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer">
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
        <a target="_blank" rel="noopener noreferrer">
          <ExportOutlined /> Выйти
        </a>
      ),
      key: "4",
    },
  ];
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div style={styles.useracc}>
        <div style={styles.main as React.CSSProperties}>
          <div style={styles.header as React.CSSProperties}>
            <button style={styles.button as React.CSSProperties}>
              <div style={styles.basic as React.CSSProperties}>
                <img src={pic} />
                <div style={styles.text}>Основа с иконкой</div>
              </div>
            </button>
            <button style={styles.dark} onClick={() => setDarkMode(!darkMode)}>
              <img src={pic1} />
            </button>
            <div style={styles.user as React.CSSProperties}>
              <div style={styles.text1}>Хорошего дня, username</div>
              <img src={pic2} />
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>{<DownOutlined />}</Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div style={styles.content as React.CSSProperties}>
            <div style={styles.leftColumn as React.CSSProperties}>
              <div style={styles.leftColumnPhoto as React.CSSProperties}>
                <div style={styles.photoUser as React.CSSProperties}>
                  <img style={{ width: "150px", height: "150px" }} src={pic2} />
                  <Link style={styles.changePhoto} to="photo">
                    изменить фото
                  </Link>
                </div>
              </div>
              <div style={styles.leftrightColumn as React.CSSProperties}>
                <div style={styles.nickName as React.CSSProperties}>
                  <div style={styles.text2}>Ваш никнейм:</div>
                  <input
                    style={styles.username as React.CSSProperties}
                    placeholder="Nickname"
                  ></input>
                </div>
                <div style={styles.mail as React.CSSProperties}>
                  <div style={styles.text3}> Ваша почта:</div>
                  <input
                    style={styles.email as React.CSSProperties}
                    placeholder="Email"
                  ></input>
                  <Checkbox onChange={onChange}>
                    Подписаться на рассылку
                  </Checkbox>
                </div>
                <div style={styles.social as React.CSSProperties}>
                  <div style={styles.text4}> Ваши социальные сети:</div>
                  <div style={styles.media as React.CSSProperties}>
                    <div style={styles.facebook}>
                      <img src={pic3} />
                    </div>
                    <div style={styles.facebook}>
                      <img src={pic4} />
                    </div>
                  </div>
                </div>
                <button style={styles.leftColumnButton as React.CSSProperties}>
                  <div style={styles.basic1 as React.CSSProperties}>
                    <div style={styles.text5}>Сохранить изменения</div>
                  </div>
                </button>
              </div>
            </div>
            <div style={styles.rightColumn as React.CSSProperties}>
              <button style={styles.headerButton as React.CSSProperties}>
                <div style={styles.basic2 as React.CSSProperties}>
                  <div style={styles.text6}>Оформить премиум подписку</div>
                </div>
              </button>
              <div style={styles.time as React.CSSProperties}>
                <div style={styles.title as React.CSSProperties}>
                  <div style={styles.text7}> Такс такс такс</div>
                </div>
                <div style={styles.timeAndDate as React.CSSProperties}>
                  <div style={styles.time1 as React.CSSProperties}>
                    <div style={styles.text8}>На часах у нас</div>
                    <div style={styles.tableTime as React.CSSProperties}>
                      <FieldTimeOutlined />
                      <div style={styles.textTime}>12:30:43</div>
                    </div>
                  </div>
                  <div style={styles.date as React.CSSProperties}>
                    <div style={styles.text9}>А сегодня у нас</div>
                    <div style={styles.tableDate as React.CSSProperties}>
                      <CalendarOutlined />
                      <div style={styles.textDate}>5 апреля 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={styles.watching as React.CSSProperties}>
                <div style={styles.titleWatching as React.CSSProperties}>
                  <div style={styles.text10}>Наблюдение</div>
                </div>
                <div style={styles.statistic as React.CSSProperties}>
                  <div style={styles.textStatistic}>
                    Больше всего задач вы <Link to={"create"}>создаете</Link> в
                    Понедельник{" "}
                  </div>
                  <div style={styles.textStatistic1}>
                    Больше всего задач вы завершаете во Вторник
                  </div>
                </div>
              </div>
              <div style={styles.fact as React.CSSProperties}>
                <div style={styles.titleFact as React.CSSProperties}>
                  <div style={styles.textFact}>Факт дня</div>
                </div>
                <div style={styles.contentTextFact as React.CSSProperties}>
                  <div style={styles.textFact1}>
                    Человек, который просыпается в 6 утра, по статистике,
                    закрывает все задачи к 18:00 вечера. Попробуем также 🤔?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserAccount;
const styles = {
  useracc: {
    height: "100vh",
    display: "flex",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "60px",
    position: "absolute",
    width: "1069px",
    height: "660px",
    left: "301px",
    top: "20px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    // gap: "581px",
    width: "1068px",
    height: "44px",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    width: "215px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
    // border: "none",
  },
  basic: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // padding: "10px 25px",
    gap: "10px",
    width: "215px",
    height: "42px",
  },
  text: {
    width: "137px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01e",
    color: "#FAFAFA",
  },
  dark: {
    display: "flex",
    border: "none",
    backgroundColor: "#FFFFFF",
    opacity: "0.7",
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "20px",
    width: "294px",
    height: "44px",
  },
  text1: {
    width: "186px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0px",
    width: "1069px",
    height: "556px",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "20px",
    gap: "50px",
    width: "540px",
    height: "408px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  leftColumnPhoto: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "150px",
    height: "176px",
  },
  photoUser: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "150px",
    height: "176px",
  },
  changePhoto: {
    width: "84px",
    height: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "300",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.03em",
    textDecorationLine: "underline",
    color: "#29A19C",
  },
  leftrightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "300px",
    height: "368px",
  },
  nickName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "300px",
    height: "73px",
  },
  text2: {
    width: "97px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.03em",
    color: "#000000",
  },
  username: {
    width: "300px",
    height: "44px",
    boxSizing: "border-box",
    // position: "absolute",
    left: "0px",
    top: "29px",
  },
  mail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "300px",
    height: "102px",
  },
  text3: {
    width: "84px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.03em",
    color: "#000000",
  },
  email: {
    width: "300px",
    height: "44px",
    boxSizing: "border-box",
    left: "0px",
    top: "29px",
  },
  social: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "163px",
    height: "61px",
  },
  text4: {
    width: "163px",
    height: "19px",
    fontFamily: "Nunito",
    fontstyle: "normal",
    fontHeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.03em",
    color: "#000000",
  },
  media: {
    display: "flex",
    flexdirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "20px",
    width: "84px",
    height: "32px",
  },
  facebook: {
    width: "32px",
    height: "32px",
  },
  leftColumnButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "218px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
  },
  basic1: {
    display: "flex",
    flexdirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "218px",
    height: "42px",
  },
  text5: {
    width: "168px",
    height: "22px",
    fontfamily: "Nunito",
    fontstyle: "normal",
    fontheight: "600",
    fontsize: "16px",
    lineheight: "22px",
    letterspacing: "0.01em",
    color: "#FAFAFA",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "473px",
    height: "556px",
  },
  headerButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "473px",
    height: "42px",
    background: "#ECCA75",
    borderRadius: "8px",
  },
  basic2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "473px",
    height: "42px",
  },
  text6: {
    width: "226px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01em",
    color: "#FAFAFA",
  },
  time: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "473px",
    height: "143px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "433px",
    height: "25px",
  },
  text7: {
    width: "433px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  timeAndDate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0px",
    gap: "71px",
    width: "433px",
    height: "58px",
  },
  time1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "5px",
    width: "140px",
    height: "58px",
  },
  text8: {
    width: "112px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  tableTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "140px",
    height: "34px",
  },
  textTime: {
    width: "106px",
    height: "34px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "25px",
    lineHeight: "34px",
    letterSpacing: "0.02em",
  },
  date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "5px",
    width: "212px",
    height: "58px",
  },
  text9: {
    width: "112px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  tableDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "212px",
    height: "34px",
  },
  textDate: {
    width: "178px",
    height: "34px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "25px",
    lineHeight: "34px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  watching: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "472px",
    height: "133px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  titleWatching: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "432px",
    height: "25px",
  },
  text10: {
    width: "432px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  statistic: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "432px",
    height: "48px",
  },
  textStatistic: {
    width: "323px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  textStatistic1: {
    width: "317px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  fact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "472px",
    height: "148px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08",
    borderRadius: "10px",
  },
  titleFact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "81px",
    height: "25px",
  },
  textFact: {
    width: "81px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  contentTextFact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "432px",
    height: "63px",
  },
  textFact1: {
    width: "432px",
    height: "63px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.02em",
    color: "#282846",
  },
};
