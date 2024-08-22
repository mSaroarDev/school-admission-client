import { userVerify } from "@/libs/auth";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLogged, setIsLogged] = useState(null);

  const verifyUser = async () => {
    try {
      const res = await userVerify();

      if (res.ok) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    } catch (error) {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return isLogged;
};
