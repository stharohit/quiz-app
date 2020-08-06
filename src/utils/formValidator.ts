export const validateEmail = (email: string) => {
  if (!email) return "Email is required!";
  if (email && email.length > 0) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = emailRegex.test(String(email).toLowerCase());
    if (!validEmail) return "Not a valid email!";
  }

  if (email && email.length === 0) return "Email is required!";

  return true;
};

export const validatePassword = (password: string) => {
  if (!password) return "Password required";
  if (password && password.length < 5)
    return "Password Must be atleast 5 characters";
  return true;
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    return "Passwords do not Match!";
  }
  return true;
};

export const validateUserName = (username: string) => {
  if (!username || username.length === 0) {
    return "Username is required";
  }
  return true;
};
