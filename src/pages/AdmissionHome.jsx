import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdmissionHome() {
  // state
  const [agree, setAgree] = useState(false);
  const handleCheckboxChange = (event) => {
    setAgree(event.target.checked);
  };

  return (
    <>
      <div className="bg-gray-100 p-5">
        <h1 className="font-semibold text-xl text-center ">
          Admission Terms and Conditions
        </h1>
      </div>
      <main className="p-10">
        <p>
          {`What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        </p>

        <div className="mt-7 mb-3 text-center flex items-center justify-center gap-2">
          <input
            type="checkbox"
            checked={agree} // Bind the checked state to the checkbox
            onChange={handleCheckboxChange} // Handle checkbox state change
            className="checkbox checkbox-xs"
          />{" "}
          I have agreed all of the terms and Conditions and want to apply to
          this institute.
        </div>

        <Link
          to="/admission/form?step=personal_info"
          className={`mx-auto w-fit mt-4 rounded-full px-7 py-2.5 border border-brand hover:bg-transparent transition-all duration-150 flex items-center gap-2 ${
            agree
              ? "bg-brand text-white hover:text-brand"
              : "bg-gray-200 text-black pointer-events-none"
          }`}
        >
          <span>Admission Form</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </main>
    </>
  );
}
