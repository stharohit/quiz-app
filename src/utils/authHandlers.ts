export const newUser = (
  email: "string",
  password: "string",
  username: string
) => {
  let users = window.localStorage.getItem("users");
  if (users) {
    let usersArray: Array<{
      username: string;
      email: string;
      password: string;
    }> = JSON.parse(users);
    let exists = usersArray.filter((user) => user.email === email);
    if (exists.length > 0) return "User already exists!";

    usersArray.push({ username: username, email: email, password: password });

    window.localStorage.setItem("users", JSON.stringify(usersArray));
    return true;
  } else {
    window.localStorage.setItem(
      "users",
      JSON.stringify([{ username: username, email: email, password: password }])
    );
  }
};

export const loginUser = (email: string, password: string) => {
  let user = window.localStorage.getItem("users");
  let userArray: Array<{ username: string; email: string; password: string }> =
    user && JSON.parse(user);
  let noExists = userArray.filter(
    (user) => user.email === email && user.password === password
  );
  if (noExists.length > 0) return noExists[0].username;
  return false;
};
