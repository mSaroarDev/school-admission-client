import { userApiUrl } from "@/utils/apiUrl";

const apiUrl = userApiUrl();

// user is log out
export const createApplication = async (values) => {
  try {
    const res = await fetch(apiUrl + "/application/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// user is log out
export const getApplicationDetails = async (id) => {
  try {
    const res = await fetch(apiUrl + "/application/get-app/" + id, {
      method: "GET",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// mark submitted
export const markSubmitted = async (id) => {
  try {
    const res = await fetch(apiUrl + "/application/mark-submitted/" + id, {
      method: "POST",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// user is log out
export const getApplications = async () => {
  try {
    const res = await fetch(apiUrl + "/application/get-applications", {
      method: "GET",
      credentials: "include",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// delete an app
export const deleteApplication = async (id) => {
  try {
    const res = await fetch(apiUrl + "/application/delete/" + id, {
      method: "DELETE",
      credentials: "include",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// delete an app
export const previewApplication = async (id, values) => {
  try {
    const res = await fetch(apiUrl + "/application/preview/" + id, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
