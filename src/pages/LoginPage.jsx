import LoginForm from '@/components/LoginForm';
import { useAuth } from "@/utils/useAuth";
import { Link, Navigate } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';

export default function LoginPage() {
  const isLogged = useAuth();  

  return isLogged === null ? <Spinner /> : isLogged === true ? <Navigate to='/admin/dashboard' /> : (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="w-[500px] p-10 rounded-xl shadow-md">
          <h2 className='font-semibold mb-5 text-center'>Email: example@gmail.com, Password: 123456</h2>
          <LoginForm />
        </div>

        <Link to='/' className="mx-auto flex items-center gap-2 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <span>Back to Homepage</span>
        </Link>
      </div>
    </>
  );
}
