import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function MasterLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.startsWith("/admin") ? (
        <AdminLayout pathname={pathname}>{children}</AdminLayout>
      ) : pathname.startsWith("/auth") ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          <div className="mt-20">{children}</div>
        </>
      )}
    </>
  );
}
