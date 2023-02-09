import { Header } from "antd/es/layout/layout";
import { ReactNode } from "react";
import { useTheme } from "../../hooks/use-theme";
import { UserHeader } from "../../userPage/atoms/UserHeader";
import { ButtonHeaderMainPage } from "../atoms/ButtonHeaderMainPage";
import pic11 from "../../image/sun.svg";
import pic12 from "../../image/moon.svg";

export type HeaderButtonUsers = {
  children: ReactNode;
};

export const HeaderUser = (props: HeaderButtonUsers): JSX.Element => {
  const { children } = props;
  const { theme, setTheme } = useTheme();
  const handleChangeDarkLight = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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
      <ButtonHeaderMainPage
        children={children}
        onClick={() => {
          throw new Error("Function not implemented.");
        }}
      />
      {theme === "light" ? (
        <img
          alt=""
          onClick={handleChangeDarkLight}
          style={{
            color: "var(--button-text-color)",
            cursor: "pointer",
          }}
          src={pic12}
        />
      ) : (
        <img
          alt=""
          onClick={handleChangeDarkLight}
          style={{
            color: "var(--button-text-color)",
            cursor: "pointer",
          }}
          src={pic11}
        />
      )}

      <UserHeader children={children} />
    </Header>
  );
};
