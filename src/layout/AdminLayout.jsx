import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children, pathname }) {
  return (
    <>
      <AdminSidebar pathname={pathname} />
      <div className="ml-[250px] p-10">{children}</div>
    </>
  );
}
