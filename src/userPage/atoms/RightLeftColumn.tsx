import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { ReactNode } from "react";
import pic4 from "../../image/twitter 1.svg";
import pic3 from "../../image/facebook 1.svg";
export type Column = {
  children: ReactNode;
};

export const RightLeftColumn = (props: Column): JSX.Element => {
  const { children } = props;
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div style={styles.rightLeftColumn as React.CSSProperties}>
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
        <Checkbox
          style={{
            color: "var(--button-text-color)",
            paddingTop: "10px",
          }}
          onChange={onChange}
        >
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
  );
};
const styles = {
  rightLeftColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "27px",
    width: "100%",
    height: "368px",
    paddingLeft: "50px",
  },
  nickName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
    width: "70%",
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
    color: "var(--button-text-color)",
  },
  username: {
    width: "100%",
    height: "44px",
    boxSizing: "border-box",
    background: "var(--background-color)",
    color: "var(--button-text-color)",

    // position: "absolute",
    left: "0px",
    top: "29px",
  },
  mail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    // gap: "10px",
    width: "70%",
    height: "110px",
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
    color: "var(--button-text-color)",
  },
  email: {
    width: "100%",
    height: "44px",
    background: "var(--background-color)",
    color: "var(--button-text-color)",
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
    color: "var(--button-text-color)",
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
    width: "40%",
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
    width: "100%",
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
};
