import { logout } from "@/libs/auth";
import { showError, showSuccess } from "@/utils/showToast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminSidebar({ currUser }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // logout function
  const logoutUser = async () => {
    Swal.fire({
      title: "Confirm?",
      text: "You will be logout...",
      icon: "question",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await logout();

          if (res.ok) {
            navigate("/auth/login");
            showSuccess("Log Out Success");
          } else {
            showError("Logout Failed");
          }
        } catch (error) {
          console.log(error);
          showError("Internal Server Error");
        }
      }
    });
  };

  return (
    <>
      <div className="w-[250px] fixed h-full top-0 bottom-0 left-0 bg-gray-100 py-10">
        <div className="flex flex-col items-center gap-5">
          <img src="/logoipsum.svg" alt="logo" className="w-[120px]" />

          <div className="_profile flex flex-col items-center justify-center mt-5">
            <div className="h-[80px] w-[80px] rounded-full ring-2 ring-blue-600 overflow-hidden">
              <img
                src={currUser?.image}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-sm text-black font-semibold mt-3">
              {currUser?.userName}
            </h2>
            <p className="text-xs text-gray-600 font-light">
              {currUser?.email}
            </p>
          </div>

          <div className="w-full mt-10 flex flex-col">
            <Link
              to="/admin/dashboard"
              className={`_side-links ${
                pathname.startsWith("/admin/dashboard") && "_sidebar-active"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/admin/applications"
              className={`_side-links ${
                pathname.startsWith("/admin/applications") && "_sidebar-active"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>

              <span>Applications</span>
            </Link>

            <button
              onClick={logoutUser}
              className={`_side-links`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>

              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
