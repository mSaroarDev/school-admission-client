import { loggedUser } from "@/libs/auth";
import { useEffect, useState } from "react";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  const verifyUser = async () => {
    try {
      const res = await loggedUser();

      if (res.ok) {
        const data = await res.json();
        setUserInfo(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return userInfo;
};
