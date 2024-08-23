import AdminSidebar from "@/components/AdminSidebar";
import PrivateRoutes from "@/components/PrivateRoutes";
import { useUserInfo } from "@/utils/useUserInfo";

export default function AdminLayout({ children }) {
  const currUser = useUserInfo();

  return (
    <>
      <PrivateRoutes>
        <AdminSidebar currUser={currUser} />
        <div className="ml-[250px]">{children}</div>
      </PrivateRoutes>
    </>
  );
}
