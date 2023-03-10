import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { ReactNode } from "react";
import { useTheme } from "../../hooks/use-theme";
import { HeaderButtonUser } from "../atoms/headerButton";
import { UserHeader } from "../atoms/UserHeader";
export type HeaderButtonUser = {
  children: ReactNode;
};

export const HeaderUser = (props: HeaderButtonUser): JSX.Element => {
  const { children } = props;
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };

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
      <HeaderButtonUser children={children} />
      <Button style={{ color: "white" }} onClick={handleLightThemeClick}>
        {/* {isDarkMode ? "Light" : "Dark"} */} light
      </Button>
      <Button style={{ color: "white" }} onClick={handleDarkThemeClick}>
        Dark
      </Button>
      <UserHeader children={children} />
    </Header>
  );
};
