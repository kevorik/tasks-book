import pic from "../image/Group 1.svg";
import pic1 from "../image/moon.svg";
import pic2 from "../image/header__avatar.svg";
import pic5 from "../image/Логотип.svg";
import pic6 from "../image/briefcase.svg";
import pic7 from "../image/zap.svg";
import pic8 from "../image/bar-chart-2.svg";
import pic9 from "../image/zap.svg";
import pic10 from "../image/Функции.svg";
import pic11 from "../image/График.svg";

import { Card, MenuProps, Dropdown, Space } from "antd";
import React, { useState } from "react";
import {
  SettingOutlined,
  UserOutlined,
  StarOutlined,
  ExportOutlined,
  DownOutlined,
  FieldTimeOutlined,
  CalendarOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  PlusSquareOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
export function MainPage() {
  const gridStyle: React.CSSProperties = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "15px",
    gap: "10px",
    width: "526px",
    height: "49px",
    background: "#FFFFFF",
    border: "1px solid rgba(40, 40, 70, 0.1)",
    borderRadius: "10px",
    cursor: "pointer",
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleCard = (gridStyle: any) => {
    console.log("gridStyle", gridStyle);

    if (gridStyle) {
      return <EditOutlined />;
    }
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
            <button style={styles.buttonHeader as React.CSSProperties}>
              <div style={styles.basicHeader as React.CSSProperties}>
                <img src={pic} />
                <div style={styles.textHeader}>Новая задача</div>
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
              <div style={styles.weeklyProgress as React.CSSProperties}>
                <div style={styles.topWeeklyProgress as React.CSSProperties}>
                  <div style={styles.titleTopWeeklyProgress}>
                    Успехи за неделю
                  </div>
                  <img src={pic10} />
                </div>
                <div style={styles.circles as React.CSSProperties}>
                  <div style={styles.circle as React.CSSProperties}>
                    <div style={styles.titleCircle}>Создано</div>
                    <div style={styles.taskCircle as React.CSSProperties}>
                      <div style={styles.numberTaskCircle}>113</div>
                      <div style={styles.bottomTaskCircle}>задач</div>
                    </div>
                  </div>
                  <div style={styles.circle as React.CSSProperties}>
                    <div style={styles.titleCircle}>Завершено</div>
                    <div style={styles.taskCircle as React.CSSProperties}>
                      <div style={styles.numberTaskCircle}>97</div>
                      <div style={styles.bottomTaskCircle}>задач</div>
                    </div>
                  </div>
                  <div style={styles.circle as React.CSSProperties}>
                    <div style={styles.titleCircle}>Удалено</div>
                    <div style={styles.taskCircle as React.CSSProperties}>
                      <div style={styles.numberTaskCircle}>14</div>
                      <div style={styles.bottomTaskCircle}>задач</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={styles.tasks as React.CSSProperties}>
                <div style={styles.activeTasks as React.CSSProperties}>
                  <div style={styles.titleTasks}>Активные задачи</div>
                  <img src={pic10} />
                </div>
                <div style={styles.taskTasks as React.CSSProperties}>
                  <div style={styles.tableTasks as React.CSSProperties}>
                    <Card>
                      <Card.Grid onClick={handleCard} style={gridStyle}>
                        <div style={styles.textTasks}>
                          Приготовить вкусный ужин
                        </div>
                      </Card.Grid>
                    </Card>
                    <Card>
                      <Card.Grid style={gridStyle}>
                        <div style={styles.textTasks}>
                          Устранить засор в раковине
                        </div>
                      </Card.Grid>
                    </Card>
                    <Card>
                      <Card.Grid style={gridStyle}>
                        <div style={styles.textTasks}>Стирка белого белья </div>
                      </Card.Grid>
                    </Card>
                    <Card>
                      <Card.Grid style={gridStyle}>
                        <div style={styles.textTasks}>
                          Разморозить холодильник
                        </div>
                      </Card.Grid>
                    </Card>
                  </div>
                </div>
                <div style={styles.completedTasks as React.CSSProperties}>
                  <div style={styles.titleCompletedTasks}>
                    Завершенные задачи
                  </div>
                  <Card>
                    <Card.Grid style={gridStyle}>
                      <div style={styles.textCompletedTasks}>Полить цветы</div>
                    </Card.Grid>
                  </Card>
                  <Card>
                    <Card.Grid style={gridStyle}>
                      <div style={styles.textCompletedTasks}>
                        Вызвать сантехника
                      </div>
                    </Card.Grid>
                  </Card>
                </div>
              </div>
            </div>
            <div style={styles.rightColumn as React.CSSProperties}>
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
              <div style={styles.graphic as React.CSSProperties}>
                <div style={styles.titleGraphic as React.CSSProperties}>
                  <div style={styles.textGraphic}>График успеваемости</div>
                </div>
                <div style={styles.graphGraphic as React.CSSProperties}>
                  <img src={pic11} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.layout as React.CSSProperties}>
        <div style={styles.designCenter as React.CSSProperties}>
          <div style={styles.topLayout as React.CSSProperties}>
            <img style={{ width: "119px", height: "54px" }} src={pic5} />
          </div>
          <div style={styles.categories as React.CSSProperties}>
            <div style={styles.textCategories}>Категории</div>
            <div style={styles.list as React.CSSProperties}>
              <div style={styles.item1 as React.CSSProperties}>
                <HomeOutlined />
                <div style={styles.textItem}>Дом</div>
                <div style={styles.active}></div>
              </div>
              <div style={styles.item1 as React.CSSProperties}>
                <UsergroupAddOutlined />
                <div style={styles.textItem}>Семья</div>
              </div>
              <div style={styles.item1 as React.CSSProperties}>
                <img src={pic6} />
                <div style={styles.textItem}>Работа</div>
              </div>
              <div style={styles.item1 as React.CSSProperties}>
                <img src={pic7} />
                <div style={styles.textItem}>Спорт</div>
              </div>
              <div style={styles.item2 as React.CSSProperties}>
                <PlusSquareOutlined />
                <div style={styles.textItem1}>Добавить</div>
              </div>
            </div>
          </div>
          <div style={styles.data as React.CSSProperties}>
            <div style={styles.textData}>Данные</div>
            <div style={styles.contentData as React.CSSProperties}>
              <div style={styles.dataItem as React.CSSProperties}>
                <img src={pic8} />
                <div style={styles.textDataItem}>Статистика</div>
              </div>
              <div style={styles.dataItem as React.CSSProperties}>
                <img src={pic9} />
                <div style={styles.textDataItem}>Сравнить</div>
              </div>
            </div>
          </div>
          <div style={styles.exit as React.CSSProperties}>
            <div style={styles.itemExit as React.CSSProperties}>
              <ExportOutlined />
              <Link style={styles.textExit} to={"/"}>
                Выйти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
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
    cursor: "pointer",
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
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "30px",
    height: "408px",
    background: "#FFFFFF",
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
    paddingLeft: "30px",
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
    // color: "#282846",
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
  layout: {
    position: "absolute",
    width: "231px",
    height: "900px",
    left: "0px",
    top: "0px",
    filter: "drop-shadow(0px 10px 25px rgba(29, 52, 54, 0.08))",
  },
  designCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "60px",
    position: "absolute",
    width: "232px",
    height: "900px",
    left: "calc(50% - 232px/2 + 0.5px",
    top: "calc(50% - 900px/2)",
    background: "#FAFAFA",
  },
  topLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "60px",
    width: "119px",
    height: "54px",
  },
  categories: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "20px",
    width: "212px",
    height: "283px",
  },
  textCategories: {
    width: "125px",
    height: "33px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "0.03em",
    color: "#29A19C",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "212px",
    height: "230px",
  },
  item1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "212px",
    height: "22px",
    backdropFilter: "blur(2px)",
  },
  textItem: {
    width: "144px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.025em",
    color: "#282846",
  },
  active: {
    width: "30px",
    height: "18px",
    background: "#29A19C",
    borderRadius: "10px 0px 0px 10px",
  },
  item2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "212px",
    height: "22px",
    backdropFilter: "blur(2px)",
    color: "#29A19C",
  },
  textItem1: {
    width: "144px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.025em",
    color: "#29A19C",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "20px",
    width: "113px",
    height: "127px",
  },
  textData: {
    width: "113px",
    height: "33px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "0.03em",
    color: "#29A19C",
  },
  contentData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "113px",
    height: "74px",
  },
  dataItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "112px",
    height: "22px",
  },
  textDataItem: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#282846",
  },
  exit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "119px",
    height: "216px",
  },
  itemExit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "119px",
    height: "22px",
  },
  textExit: {
    textDecoration: "none",
    width: "85px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.025em",
    color: "#282846",
  },
  weeklyProgress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "566px",
    height: "211px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  topWeeklyProgress: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    gap: "341px",
    width: "526px",
    height: "25px",
  },
  titleTopWeeklyProgress: {
    width: "157px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  circles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0px",
    gap: "57px",
    width: "526px",
    height: "126px",
  },
  circle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "100px",
    height: "126px",
  },
  titleCircle: {
    width: "50px",
    height: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  taskCircle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    width: "100px",
    height: "100px",
    background: "#FFFFFF",
    border: "1px solid #29A19C",
    borderRadius: "200px",
  },
  numberTaskCircle: {
    // width: "67px",
    height: "49px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "36px",
    lineHeight: "49px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  bottomTaskCircle: {
    // width: "33px",
    height: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  buttonHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    width: "182px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
    cursor: "pointer",
    // border: "none",
  },
  basicHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "182px",
    height: "42px",
  },
  textHeader: {
    width: "104px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01e",
    color: "#FAFAFA",
  },
  graphic: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "472px",
    height: "256px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  titleGraphic: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "189px",
    height: "25px",
  },
  textGraphic: {
    width: "189px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  graphGraphic: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "432px",
    height: "171px",
  },
  tasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "566px",
    height: "474px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  activeTasks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    gap: "347px",
    width: "526px",
    height: "25px",
  },
  titleTasks: {
    width: "151px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  taskTasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "526px",
    height: "226px",
  },
  tableTasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "526px",
    height: "49px",
    // cursor: "pointer",
  },
  textTasks: {
    width: "183px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  completedTasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "526px",
    height: "143px",
  },
  titleCompletedTasks: {
    width: "186px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  textCompletedTasks: {
    width: "135px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    textDecorationLine: "line-through",
    color: "#282846",
  },
};
