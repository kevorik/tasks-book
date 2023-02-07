import React, { useState } from "react";
import pic from "../image/Group 1.svg";
import pic1 from "../image/moon.svg";
import pic2 from "../image/header__avatar.svg";
import pic5 from "../image/Логотип.svg";
import pic6 from "../image/briefcase.svg";
import pic7 from "../image/zap.svg";
import pic10 from "../image/Функции.svg";
import pic11 from "../image/График.svg";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  PlusSquareOutlined,
  ExportOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  StarOutlined,
  EditOutlined,
  FieldTimeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Card,
  DatePicker,
  DatePickerProps,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Modal,
  Select,
  Space,
  theme,
  Form,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/use-theme";

const { Header, Sider, Content } = Layout;

const MainPage: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };

  // const { defaultAlgorithm, darkAlgorithm } = theme; //////
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();/////////////////////
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  // const [darkMode, setDarkMode] = useState(false);
  const handleCard = (gridStyle: any) => {
    console.log("gridStyle", gridStyle);

    if (gridStyle) {
      return <EditOutlined />;
    }
  };
  const navigate = useNavigate();
  const gridStyle: React.CSSProperties = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "15px",
    gap: "10px",
    width: "100%",
    height: "49px",
    background: "var(--background)",
    border: "1px solid rgba(40, 40, 70, 0.1)",
    borderRadius: "10px",
    cursor: "pointer",
  };
  const leftColumn: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "30px",
    // height: "408px",
    // background: "#FFFFFF",
    borderRadius: "10px",
    width: "50%",
    background: "var(--background-color)",
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <a
          onClick={() => navigate("/user")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserOutlined /> Личный кабинет
          <Link to={"/user"}></Link>
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
        <a
          onClick={() => navigate("/")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExportOutlined /> Выйти
        </a>
      ),
      key: "4",
    },
  ];
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       // colorPrimary: "#F9F9F9",
    //       colorBgLayout: "#222831",
    //       colorBgContainer: "#2C3440",
    //       colorText: "white",
    //     },
    //     // algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    //   }}
    // >
    // <div className={darkMode ? "dark-mode" : "light-mode"}>
    <ConfigProvider
      theme={{
        token: { colorBgContainer: "#2C3440" },
        // algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,//////////////////////////////
      }}
    >
      <Layout style={{ height: "100vh" }}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "60px",
            }}
          >
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
                      <img
                        src={pic6}
                        style={{ color: "var(--button-text-color)" }}
                      />
                    ),
                    label: "Работа",
                  },
                  {
                    key: "4",
                    icon: (
                      <img
                        src={pic7}
                        style={{ color: "var(--button-text-color)" }}
                      />
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
                  <ExportOutlined
                    style={{ color: "var(--button-text-color)" }}
                  />
                  <Link style={styles.textExit} to={"/"}>
                    Выйти
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout.Sider>
        <Layout
          style={{ paddingLeft: "50px", background: "var(--background-color)" }} // background: "rgb(255, 255, 255)"
        >
          <Header
            style={{
              padding: 0,
              // style={{ backgroundColor: token.colorPrimary }}
              background: "none",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={showModal}
              style={styles.buttonHeader as React.CSSProperties}
            >
              <div style={styles.basicHeader as React.CSSProperties}>
                <img src={pic} />
                <div style={styles.textHeader}>Новая задача</div>
              </div>
            </button>
            <Modal
              footer={[
                <div style={styles.buttonModal as React.CSSProperties}>
                  <div style={styles.cancelButtonModal as React.CSSProperties}>
                    <Button
                      onClick={handleCancel}
                      style={styles.cancelButton as React.CSSProperties}
                    >
                      <div style={styles.textCancelButton}>Отменить</div>
                    </Button>
                  </div>
                  <Button style={styles.saveTemplate as React.CSSProperties}>
                    <div style={styles.textSaveTemplate}>
                      Сохранить как шаблон
                    </div>
                  </Button>
                  <Button
                    onClick={handleOk}
                    style={styles.addButton as React.CSSProperties}
                  >
                    <div style={styles.textCancelButton}>Добавить</div>
                  </Button>
                </div>,
              ]}
              onCancel={handleCancel}
              style={styles.modal as React.CSSProperties}
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
            >
              <div style={styles.titleModal as React.CSSProperties}>
                <div style={styles.textModal}>Добавить новую задачу</div>
              </div>
              <div style={styles.contentModal as React.CSSProperties}>
                <div style={styles.itemContent as React.CSSProperties}>
                  <div style={styles.itemTextModal}>Что нужно сделать?</div>
                  <input style={styles.taskModal as React.CSSProperties}>
                    {/* <div style={styles.inputModal}></div> */}
                  </input>
                </div>
                <div style={styles.item2Content as React.CSSProperties}>
                  <div style={styles.categoriesModal as React.CSSProperties}>
                    <div style={styles.titleCategoriesModal}>Категория</div>
                    <Select
                      defaultValue="Выбрать"
                      style={styles.selectModal as React.CSSProperties}
                      allowClear
                      options={[{ value: "lucy", label: "Lucy" }]}
                    />
                  </div>
                  <div style={styles.categoriesModal as React.CSSProperties}>
                    <div style={styles.titleCategoriesModal}>Когда?</div>
                    <DatePicker
                      style={styles.selectModal as React.CSSProperties}
                      onChange={onChange}
                    />
                  </div>
                  <div style={styles.categoriesModal as React.CSSProperties}>
                    <div style={styles.titleCategoriesModal}>
                      Приоритет задачи
                    </div>
                    <Select
                      defaultValue="Выбрать"
                      style={styles.selectModal as React.CSSProperties}
                      allowClear
                      options={[{ value: "lucy", label: "Lucy" }]}
                    />
                  </div>
                </div>
              </div>
            </Modal>
            <Button
              style={{ color: "white" }}
              // style={styles.dark}
              // style={{ backgroundColor: token.colorPrimary }}
              // onClick={() => setDarkMode(!darkMode)}
              onClick={handleLightThemeClick}
            >
              {/* {isDarkMode ? "Light" : "Dark"} */} light
              {/* <img src={pic1} /> */}
            </Button>
            <Button style={{ color: "white" }} onClick={handleDarkThemeClick}>
              Dark
            </Button>
            <div style={styles.user as React.CSSProperties}>
              <div style={styles.text1}>Хорошего дня, username</div>
              <img src={pic2} />
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>{<DownOutlined />}</Space>
                </a>
              </Dropdown>
            </div>
          </Header>
          {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
          <Content
            style={{
              marginTop: "24px",
              // padding: 24,
              minHeight: 280,
              width: "100%",
              // background: colorBgContainer,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={leftColumn}>
              <Form style={styles.weeklyProgress as React.CSSProperties}>
                <div style={styles.topWeeklyProgress as React.CSSProperties}>
                  <div style={styles.titleTopWeeklyProgress}>
                    Успехи за неделю
                  </div>
                  <img
                    src={pic10}
                    style={{ background: "var(--button-text-color)" }}
                  />
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
              </Form>
              <div style={styles.tasks as React.CSSProperties}>
                <div style={styles.activeTasks as React.CSSProperties}>
                  <div style={styles.titleTasks}>Активные задачи</div>
                  <img
                    src={pic10}
                    style={{ background: "var(--button-text-color)" }}
                  />
                </div>
                <div style={styles.taskTasks as React.CSSProperties}>
                  <div style={styles.tableTasks as React.CSSProperties}>
                    <Card style={{ width: "100%" }}>
                      <Card.Grid style={gridStyle}>
                        <div style={styles.textTasks}>
                          Приготовить вкусный ужин
                        </div>
                      </Card.Grid>
                    </Card>
                    <Card style={{ width: "100%" }}>
                      <Card.Grid style={gridStyle}>
                        <div style={styles.textTasks}>
                          Устранить засор в раковине
                        </div>
                      </Card.Grid>
                    </Card>
                    <Card style={{ width: "100%" }}>
                      <Card.Grid style={gridStyle}>
                        <div style={styles.textTasks}>Стирка белого белья </div>
                      </Card.Grid>
                    </Card>
                    <Card style={{ width: "100%" }}>
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
                  <Card style={{ width: "100%" }}>
                    <Card.Grid style={gridStyle}>
                      <div style={styles.textCompletedTasks}>Полить цветы</div>
                    </Card.Grid>
                  </Card>
                  <Card style={{ width: "100%" }}>
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
                  {/* <div style={styles.textTasks}>
                    {activeTasls.map((task) => (
                      <div key={task.name}></div>
                    ))}
                  </div> */}
                  <div style={styles.text7}> Такс такс такс</div>
                </div>
                <div style={styles.timeAndDate as React.CSSProperties}>
                  <div style={styles.time1 as React.CSSProperties}>
                    <div style={styles.text8}>На часах у нас</div>
                    <div style={styles.tableTime as React.CSSProperties}>
                      <FieldTimeOutlined
                        style={{ color: "var(--button-text-color)" }}
                      />
                      <div style={styles.textTime}>12:30:43</div>
                    </div>
                  </div>
                  <div style={styles.date as React.CSSProperties}>
                    <div style={styles.text9}>А сегодня у нас</div>
                    <div style={styles.tableDate as React.CSSProperties}>
                      <CalendarOutlined
                        style={{ color: "var(--button-text-color)" }}
                      />
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
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "var(--button-text-color)",
                    }}
                    src={pic11}
                  />
                </div>
              </div>
            </div>
          </Content>
          {/* </div> */}
        </Layout>
      </Layout>
    </ConfigProvider>
    // </div>
  );
};

export default MainPage;

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
    height: "430px",
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
    width: "100%",
    height: "42px",
  },
  text: {
    width: "137px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
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
    // width: "294px",
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
    width: "100%",
    height: "42px",
  },
  textHeader: {
    width: "104px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01e",
    color: "#FAFAFA",
  },
  buttonModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "0px",
    gap: "10px",
    width: "660px",
    height: "65px",
  },
  cancelButtonModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "292px",
    height: "42px",
  },
  cancelButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 25px",
    gap: "10px",
    width: "124px",
    height: "42px",
    background: "#F05454",
    borderRadius: "8px",
    cursor: "pointer",
  },
  textCancelButton: {
    width: "74px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01em",
    color: "#FAFAFA",
  },
  saveTemplate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 25px",
    gap: "10px",
    width: "224px",
    height: "42px",
    border: "1px solid #29A19C",
    borderRadius: "8px",
    cursor: "pointer",
    background: "var(--button-text-color)",
  },
  textSaveTemplate: {
    width: "174px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22x",
    lineHeight: "22px",
    letterSpacing: "0.01em",
    color: "#29A19C",
  },
  addButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 25px",
    gap: "10px",
    width: "124px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    gap: "30px",
    position: "relative",
    width: "700px",
    height: "350px",
    // background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  titleModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "30px",
    gap: "20px",
    width: "660px",
    height: "27px",
  },
  textModal: {
    width: "236px",
    height: "27px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "27px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  contentModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "660px",
    height: "158px",
  },
  itemContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "660px",
    height: "64px",
  },
  itemTextModal: {
    width: "137px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02,em",
    color: "#282846",
  },
  taskModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // padding: "8px 15px",
    gap: "10px",
    width: "660px",
    height: "35px",
    border: "1px solid rgba(40, 40, 70, 0.1)",
    borderRadius: "8px",
  },
  inputModal: {
    width: "123px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#000000",
  },
  item2Content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "30px",
    width: "660px",
    height: "64px",
    background: "var(--button-text-color)",
  },
  categoriesModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "200px",
    height: "64px",
    background: "white",
  },
  titleCategoriesModal: {
    width: "127px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#282846",
  },
  selectModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    width: "200px",
    height: "35px",
    borderRadius: "8px",
    background: "white",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "30px",
    // height: "408px",
    background: "#FFFFFF",
    borderRadius: "10px",
    width: "50%",
  },
  weeklyProgress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    // height: "211px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
    filter: "drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px)",
  },
  topWeeklyProgress: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    // gap: "341px",
    width: "100%",
    // height: "25px",
  },
  titleTopWeeklyProgress: {
    // width: "157px",
    // height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  circles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "0px",
    // gap: "57px",
    width: "100%",
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
    // width: "50px",
    height: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  taskCircle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    width: "100%",
    height: "100px",
    background: "var(--background)",
    border: "1px solid #29A19C",
    borderRadius: "200px",
  },
  numberTaskCircle: {
    // width: "67px",
    height: "49px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
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
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  tasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "474px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
    filter: "drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px)",
  },
  activeTasks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    // gap: "347px",
    width: "100%",
    height: "25px",
  },
  titleTasks: {
    // width: "151px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
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
    width: "100%",
    height: "226px",
  },
  tableTasks: {
    // display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "49px",
    display: "flex",
    // cursor: "pointer",
  },
  textTasks: {
    // width: "183px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  completedTasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "143px",
  },
  titleCompletedTasks: {
    // width: "186px",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
  },
  textCompletedTasks: {
    // width: "135px",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    textDecorationLine: "line-through",
    color: "var(--button-text-color)",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "30px",
    paddingRight: "20px",
    gap: "30px",
    width: "50%",
    height: "556px",
    filter: "drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px)",
    background: "var(--background-color)",
  },
  time: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "143px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "25px",
  },
  text7: {
    display: "flex",
    // justifyContent: "center",
    width: "100%",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
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
    width: "100%",
    height: "58px",
  },
  time1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    // gap: "5px",
    width: "100%",
    height: "58px",
  },
  text8: {
    width: "100%",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  tableTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "34px",
  },
  textTime: {
    width: "100%",
    height: "34px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "34px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    // gap: "5px",
    width: "100%",
    height: "58px",
  },
  text9: {
    width: "100%",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  tableDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "34px",
  },
  textDate: {
    width: "100%",
    height: "34px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "34px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  watching: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "133px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    borderRadius: "10px",
  },
  titleWatching: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "25px",
  },
  text10: {
    width: "100%",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
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
    width: "100%",
    height: "48px",
  },
  textStatistic: {
    width: "100%",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  textStatistic1: {
    width: "100%",
    height: "19px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  fact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "148px",
    background: "var(--background)",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08",
    borderRadius: "10px",
  },
  titleFact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "100%",
    height: "25px",
  },
  textFact: {
    width: "100%",
    height: "25px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
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
    width: "100%",
    height: "63px",
  },
  textFact1: {
    width: "100%",
    height: "63px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.02em",
    color: "var(--button-text-color)",
  },
  graphic: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    width: "100%",
    height: "256px",
    background: "var(--background)",
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
    fontWeight: "600",
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
    width: "100%",
    height: "171px",
  },
};
// filter: drop-shadow(rgba(29, 52, 54, 0.08) 0px 10px 25px);
