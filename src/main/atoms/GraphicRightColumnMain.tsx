import React, { ReactNode } from "react";
import pic11 from "../../image/График.svg";
export type Graphic = {
  children: ReactNode;
};

export const GraphicRightColumn = (props: Graphic): JSX.Element => {
  const { children } = props;

  return (
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
  );
};

const styles = {
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
