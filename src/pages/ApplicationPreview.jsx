import FormPreview from "@/components/FormPreview";
import { useParams } from "react-router-dom";

export default function ApplicationPreview() {
  const { id } = useParams();

  return (
    <>
      <div className="bg-gray-100 p-5">
        <h1 className="font-semibold text-xl text-center ">
          Preview Application
        </h1>
      </div>

      <FormPreview />

      <div className="py-10 flex items-center justify-center">
        <button className="bg-brand rounded-md text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2">
          Confirm Submission
        </button>
      </div>
    </>
  );
}
