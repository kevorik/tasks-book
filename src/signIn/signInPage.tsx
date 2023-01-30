import { Link } from "react-router-dom";
import Facebook from "../uploadImage/Facebook";

export function SignInPage() {
  return (
    <div style={styles.signPage}>
      <div style={styles.signIn as React.CSSProperties}>
        <div style={styles.signacc}>Вход в аккаунт</div>
        <div style={styles.content as React.CSSProperties}>
          <input
            style={styles.email as React.CSSProperties}
            placeholder="E-mail"
          ></input>
          <input
            style={styles.email as React.CSSProperties}
            placeholder="Пароль"
          ></input>
          <button style={styles.button as React.CSSProperties}>Войти</button>
          <div style={styles.register}>
            Еще нет аккаунта?<Link to="register">Регистрация</Link>
          </div>
          <div style={styles.lines as React.CSSProperties}>
            <div style={styles.line1}></div>
            <div>или</div>
            <div style={styles.line2}></div>
          </div>
          <div style={styles.media as React.CSSProperties}>
            <div style={styles.facebook}>
              <div style={styles.vector2 as React.CSSProperties}>
                <div style={styles.vector1 as React.CSSProperties}></div>
              </div>

              {/* <Facebook path={"/src/image/test.png"} /> */}
            </div>
            <div>twitter</div>
          </div>
        </div>
      </div>
      {/* <div>hello world</div> */}
    </div>
  );
}
export default SignInPage;

const styles = {
  signPage: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
    position: "absolute",
    width: "350px",
    height: "375px",
    left: "calc(50% - 350px/2)",
    top: "calc(50% - 375px/2 + 0.5px)",
    background: "#FFFFFF",
    boxShadow: "0px 10px 25px rgb(29 52 54 / 8%)",
    borderRadius: "10px",
  },
  signacc: {
    fontFamily: "Nunito",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.02em",
    color: "#29A19C",
    padding: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "20px",
    width: "310px",
    height: "290px",
  },
  email: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "10px 15px",
    gap: "10px",
    width: "310px",
    height: "19px",
    border: "1px solid rgba(40, 40, 70, 0.1)",
    borderRadius: "8px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontHeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.02em",
    color: "#000000",
    // opacity: "0.3",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 25px",
    gap: "10px",
    width: "97px",
    height: "42px",
    background: "#29A19C",
    borderRadius: "8px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.01em",
    color: "#FAFAFA",
  },
  register: {
    display: "flex",
    justifyContent: "center",
    width: "310px",
    height: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "16px",
    letterSpacing: "0.01em",
    color: "#000000",
  },
  lines: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "15px",
    width: "310px",
    height: "22px",
    opacity: "0.4",
  },
  line1: {
    width: "125.5px",
    height: "0px",
    background: "#282846",
    opacity: "0.5",
    border: "1px solid #282846",
  },
  line2: {
    width: "125.5px",
    height: "0px",
    background: "#282846",
    opacity: "0.5",
    border: "1px solid #282846",
  },
  media: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "20px",
    width: "84px",
    height: "32px",
  },
  facebook: {
    width: "32px",
    height: "32px",
    left: "0px",
    top: "0px",
    borderRadius: "0px",
  },
  vector1: {
    // position: "absolute",

    // left: "12px",
    // top: "6px",
    borderRadius: "0px",
    left: "37.5%",
    right: "15.62%",
    top: "18.75%",
    bottom: "0%",
    background: "#FAFAFA",
    height: "26px",
    width: "15px",
  },
  vector2: {
    // position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    background: "#1976D2",
    height: "32px",
    width: "32px",
  },
};
