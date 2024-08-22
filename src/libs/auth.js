import { userApiUrl } from "../utils/apiUrl";

const apiUrl = userApiUrl();

// user login
export const userLogin = async (values) => {
  try {
    const res = await fetch(apiUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

// verify user is logged or not
export const userVerify = async () => {
  try {
    const res = await fetch(apiUrl + "/auth/verify-logged", {
      credentials: "include",
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

// verify user is logged or not
export const loggedUser = async () => {
  try {
    const res = await fetch(apiUrl + "/auth/logged-user", {
      credentials: "include",
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
