import React, { ReactNode } from "react";
import pic from "../../image/Group 1.svg";
export type HeaderButton = {
  children: ReactNode;
};

export const HeaderButtonUser = (props: HeaderButton): JSX.Element => {
  const { children } = props;

  return (
    <button style={styles.button as React.CSSProperties}>
      <div style={styles.basic as React.CSSProperties}>
        <img src={pic} />
        <div style={styles.text}>Основа с иконкой</div>
      </div>
      {children}
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    width: "215px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
    cursor: "pointer",
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
};
