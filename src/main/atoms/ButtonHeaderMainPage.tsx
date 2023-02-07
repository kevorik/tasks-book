import React, { ReactNode, useState } from "react";
import pic from "../../image/Group 1.svg";

export type ButtonHeader = {
  children: ReactNode;
};

export const ButtonHeaderMainPage = (props: ButtonHeader): JSX.Element => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  return (
    <button
      onClick={showModal}
      style={styles.buttonHeader as React.CSSProperties}
    >
      <div style={styles.basicHeader as React.CSSProperties}>
        <img src={pic} />
        <div style={styles.textHeader}>Новая задача</div>
      </div>
    </button>
  );
};
const styles = {
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
};
