import { useAuth } from "@/utils/useAuth";
import { Navigate } from "react-router-dom";
import Spinner from "./spinner/Spinner";

export default function PrivateRoutes({ children }) {
  const isLogged = useAuth();

  return isLogged === null ? (
    <>
        <Spinner />
       
    </>
  ) : isLogged ? (
    children
  ) : (
    <Navigate to="/auth/login" />
  );
}
