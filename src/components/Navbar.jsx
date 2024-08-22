import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-white py-4 w-full fixed top-0 left-0 right-0 z-50">
        <main className="flex items-center justify-between">
          <img src="/logoipsum.svg" alt="logo" className="w-[150px]" />

          <div className="hidden lg:flex items-center gap-7 font-medium">
            <Link
              to="/"
              className="text-gray-500 hover:text-brand transition-all duration-150"
            >
              Home
            </Link>
            <Link
              to="/admission/home"
              className="text-gray-500 hover:text-brand transition-all duration-150"
            >
              Admission Form
            </Link>
            <Link
              to="/admission/tracking"
              className="text-gray-500 hover:text-brand transition-all duration-150"
            >
              Tracking
            </Link>
            <Link
              to="/auth/login"
              className="bg-brand text-white rounded-full px-6 py-2.5 transition-all duration-150 border border-brand hover:bg-transparent hover:text-brand"
            >
              Teacher Login
            </Link>
          </div>

          <div className="block lg:hidden">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-primary p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <h1 className="font-bold mb-5 ml-2">Menus</h1>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Admission Form</a>
                  </li>
                  <li>
                    <a>Tracking</a>
                  </li>
                  <li className="mt-3">
                    <a className="w-fit bg-brand text-white rounded-full px-4 py-2.5 hover:text-brand">Teacher Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
