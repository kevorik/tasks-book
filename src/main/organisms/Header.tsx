import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { ReactNode, useState } from "react";
import { useTheme } from "../../hooks/use-theme";
import { HeaderButtonUser } from "../../userPage/atoms/headerButton";
import { UserHeader } from "../../userPage/atoms/UserHeader";
import { ButtonHeaderMainPage } from "../atoms/ButtonHeaderMainPage";
import { ModalMain } from "../molecules/ModalMain";

export type HeaderButtonUser = {
  children: ReactNode;
};

export const HeaderUser = (props: HeaderButtonUser): JSX.Element => {
  const { children } = props;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);
  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <Header
      style={{
        padding: 0,
        background: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ButtonHeaderMainPage
        children={children}
        onClick={() => {
          throw new Error("Function not implemented.");
        }}
      />
      <Button style={{ color: "white" }} onClick={handleLightThemeClick}>
        {/* {isDarkMode ? "Light" : "Dark"} */} light
        {/* {theme === "light" ? "gg" : theme === "dark" ? "ss" : ""} */}
      </Button>
      <Button style={{ color: "white" }} onClick={handleDarkThemeClick}>
        Dark
      </Button>
      <UserHeader children={children} />
    </Header>
  );
};
