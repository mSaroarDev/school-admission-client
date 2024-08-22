import { Link } from "react-router-dom";

export default function AdmissionSuccess() {
  return (
    <>
      <div className="h-[500px] w-full flex flex-col items-center justify-center gap-4">
        <img src="/tick.jpg" alt="success" className="w-[250px]" />
        <h2 className="font-bold text-3xl text-green-600 text-center">
          Success!
        </h2>
        <p className="text-center text-gray-600">
          Your application form is submitted successfully.{" "}
        </p>
        <Link
          to="/"
          className="mt-4 bg-brand rounded-full text-white px-7 py-2.5 inline-block border border-brand hover:bg-transparent hover:text-brand transition-all duration-150"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}
