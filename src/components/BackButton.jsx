import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="bg-brand rounded-md text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2"
      >
        <IoArrowBackSharp className="w-h h-4" />
        <span>Back</span>
      </button>
    </>
  );
}
