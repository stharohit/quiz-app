import React, { useState } from "react";
import { stylesheet } from "typestyle";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AvatarIcon from "../../components/Icon/AvatarIcon";
import { useHistory } from "react-router";
import { newUser } from "../../utils/authHandlers";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
  validateUserName
} from "../../utils/formValidator";

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
  inputWrap: {
    marginBottom: "25px"
  },
  avatar: {
    textAlign: "center",
    marginBottom: "15px"
  },
  breaker: {
    margin: "10px 0",
    textAlign: "center"
  },
  error: {
    color: Colors.DANGER
  },
  success: {
    color: Colors.SUCCESS
  }
});

interface formValidationError {
  userErr: any;
  emailErr: any;
  passwordErr: any;
  confirmPasswordErr: any;
  exists: any;
}

const Signup = () => {
  const [username, setUserName] = useState<string | any>();
  const [email, setEmail] = useState<string | any>();
  const [password, setPassword] = useState<string | any>();
  const [confirmPassword, setConfirmPassword] = useState<string | any>();
  const [formValidation, setformValidation] = useState<
    formValidationError | any
  >();
  const [success, setsuccess] = useState<string>();
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();
    const validEmail = validateEmail(email);
    const validUsername = validateUserName(username);
    const validPassword = validatePassword(password);
    const validConfirmPassword = validatePassword(password);
    const validPasswordMatch = validatePasswordMatch(password, confirmPassword);

    if (typeof validUsername === "string") {
      setformValidation((state: any) => ({
        ...state,
        userErr: validUsername
      }));
      return;
    } else {
      setformValidation((state: any) => ({
        ...state,
        userErr: ""
      }));
    }

    if (typeof validEmail === "string") {
      setformValidation((state: any) => ({
        ...state,
        emailErr: validEmail
      }));
      return;
    } else {
      setformValidation((state: any) => ({
        ...state,
        emailErr: ""
      }));
    }

    if (typeof validPassword === "string") {
      setformValidation((state: any) => ({
        ...state,
        passwordErr: validPassword
      }));
      return;
    } else {
      setformValidation((state: any) => ({
        ...state,
        emailErr: ""
      }));
    }

    if (typeof validConfirmPassword === "string") {
      setformValidation({
        confirmPasswordErr: validConfirmPassword
      });
      return;
    } else {
      setformValidation({ confirmPasswordErr: "" });
    }

    if (typeof validPasswordMatch === "string") {
      setformValidation({
        passwordErr: validPasswordMatch,
        confirmPasswordErr: validPasswordMatch
      });
      return;
    } else {
      setformValidation({
        passwordErr: "",
        confirmPasswordErr: ""
      });
    }

    let newUserRegistration = newUser(email, password, username);

    if (typeof newUserRegistration === "string") {
      setformValidation((state: any) => ({
        ...state,
        exists: newUserRegistration
      }));
      return;
    } else {
      setloading(true);
      setTimeout(() => {
        const successMsg = username && `${username} has been registered!`;
        setsuccess(successMsg);
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setloading(false);
      }, 500);
    }
  };

  return (
    <div className={classNames.formWrap}>
      <form
        className={classNames.form}
        onSubmit={(event) => handleSignup(event)}
      >
        <div className={classNames.avatar}>
          <AvatarIcon />
        </div>
        <div className={classNames.title}>
          <h5>Singup to create your account</h5>
          <p>Enter your credentials below</p>
          <span className={classNames.error}>
            {formValidation && formValidation.exists}
          </span>
          <span className={classNames.success}>{success}</span>
        </div>
        <div className={classNames.inputWrap}>
          <Input
            type="text"
            placeholder="Username"
            value={username || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(event.target.value)
            }
          />
          <span className={classNames.error}>
            {formValidation && formValidation.userErr}
          </span>
        </div>
        <div className={classNames.inputWrap}>
          <Input
            type="email"
            placeholder="Email"
            value={email || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <span className={classNames.error}>
            {formValidation && formValidation.emailErr}
          </span>
        </div>
        <div className={classNames.inputWrap}>
          <Input
            type="password"
            placeholder="Password"
            value={password || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <span className={classNames.error}>
            {formValidation && formValidation.passwordErr}
          </span>
        </div>
        <div className={classNames.inputWrap}>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(event.target.value)
            }
          />
          <span className={classNames.error}>
            {formValidation && formValidation.confirmPasswordErr}
          </span>
        </div>
        <Button
          type="submit"
          buttonType="primary"
          width="full"
          onClick={handleSignup}
          loading={loading}
          disabled={loading}
        >
          Signup
        </Button>
        <div className={classNames.breaker}>-- or login to your account --</div>
        <Button onClick={() => history.push("/auth/login")} width="full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Signup;
