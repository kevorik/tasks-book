import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import pic2 from "../../image/header__avatar.svg";
export type Photo = {
  children: ReactNode;
};

export const PhotoUser = (props: Photo): JSX.Element => {
  const { children } = props;

  return (
    <div style={styles.leftColumnPhoto as React.CSSProperties}>
      <div style={styles.photoUser as React.CSSProperties}>
        <img
          style={{
            width: "150px",
            height: "150px",
            marginLeft: "20px",
            marginTop: "20px",
          }}
          src={pic2}
        />
        <Link style={styles.changePhoto} to="">
          изменить фото
        </Link>
      </div>
    </div>
  );
};
const styles = {
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
};
