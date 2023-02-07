import React, { ReactNode } from "react";
export type Button = {
  children: ReactNode;
};

export const ButtonRightColumn = (props: Button): JSX.Element => {
  const { children } = props;

  return (
    <button style={styles.headerButton as React.CSSProperties}>
      <div style={styles.basic2 as React.CSSProperties}>
        <div style={styles.text6}>Оформить премиум подписку</div>
      </div>
    </button>
  );
};

const styles = {
  headerButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "100%",
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
    width: "100%",
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
};
