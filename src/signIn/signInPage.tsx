import { Link, useNavigate } from "react-router-dom";
import Facebook from "../uploadImage/Facebook";
import Twitter from "../uploadImage/Twitter";
import pic from "../image/facebook 1.svg";
import pict from "../image/twitter 1.svg";
import pictu from "../image/Логотип.svg";
import pic1 from "../image/menu.svg";
export function SignInPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.signPage}>
      <div style={styles.header as React.CSSProperties}>
        <div style={styles.logo as React.CSSProperties}>
          <img src={pictu} />
        </div>
        <div style={styles.menu}>
          <img src={pic1} />
        </div>
      </div>
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
          <button
            onClick={() => navigate("main")}
            style={styles.button as React.CSSProperties}
          >
            Войти
          </button>
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
              <img src={pic} />
            </div>
            <div style={styles.facebook}>
              <img src={pict} />
            </div>
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
    cursor: "pointer",
    border: "none",
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
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    gap: "431px",
    position: "absolute",
    height: "94px",
    left: "0px",
    right: "0px",
    top: "0px",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    width: "119px",
    height: "54px",
  },
  menu: {
    width: "44px",
    height: "44px",
  },
};
