import React, { useState } from "react";
import { stylesheet } from "typestyle";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AvatarIcon from "../../components/Icon/AvatarIcon";
import { useHistory } from "react-router";
import { loginUser } from "../../utils/authHandlers";

interface Props {}

const classNames = stylesheet({
  formWrap: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px"
  },
  form: {
    width: "350px",
    boxShadow: `0 0 5px ${Colors.GREY}`,
    padding: "20px"
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",

    $nest: {}
  },
  avatar: {
    textAlign: "center",
    marginBottom: "15px"
  },
  inputWrap: {
    marginBottom: "25px"
  },
  breaker: {
    margin: "10px 0",
    textAlign: "center"
  },
  error: {
    color: Colors.DANGER
  }
});

const Login = (props: Props) => {
  const [email, setemail] = useState<string | any>();
  const [password, setpassword] = useState<string | any>();
  const [err, seterr] = useState<string | any>();
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    let login = loginUser(email, password);
    setloading(true);
    setTimeout(() => {
      if (!login) {
        seterr("Email or Password does not match");
      } else {
        window.localStorage.setItem("loggedIn", "true");
        history.push("/user/quiz");
      }
      setloading(false);
      window.localStorage.setItem("loggedInUser", login.toString());
    }, 500);
  };

  return (
    <div className={classNames.formWrap}>
      <form className={classNames.form} autoComplete="off">
        <div className={classNames.avatar}>
          <AvatarIcon />
        </div>
        <div className={classNames.title}>
          <h5>Login to play Quiz</h5>
          <p>Enter your credentials below</p>
          <span className={classNames.error}>{err}</span>
        </div>
        <div className={classNames.inputWrap}>
          <Input
            type="text"
            placeholder="Email"
            value={email || ""}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className={classNames.inputWrap}>
          <Input
            type="password"
            placeholder="Passwords"
            value={password || ""}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <Button
          loading={loading}
          disabled={loading}
          buttonType="primary"
          onClick={handleLogin}
          width="full"
        >
          Login
        </Button>
        <div className={classNames.breaker}>- - OR - -</div>
        <Button
          buttonType="primary"
          onClick={() => history.push("/auth/signup")}
          width="full"
        >
          Signup
        </Button>
      </form>
    </div>
  );
};

export default Login;
