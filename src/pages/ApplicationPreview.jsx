import FormPreview from "@/components/FormPreview";
import { getApplicationDetails, markSubmitted } from "@/libs/application";
import { showError, showSuccess } from "@/utils/showToast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ApplicationPreview() {
  const { id } = useParams();
  const navigate = useNavigate();

  // get application id
  const [data, setData] = useState();
  const getApp = async () => {
    try {
      const res = await getApplicationDetails(id);
      if (res.ok) {
        const data = await res.json();
        setData(data?.data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApp();
  }, [id]);

  // mark as submitted
  const markAsSubmitted = async () => {
    Swal.fire({
      title: "Confirm?",
      text: "Are you sure to Confirm?",
      icon: "question",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await markSubmitted(id);
          if (res.ok) {
            showSuccess("Application Submitted Successfully");
            navigate("/admission/success");
          } else {
            showError("Submission Failed");
          }
        } catch (error) {
          showError("Internal Server Error");
        }
      }
    });
  };

  return (
    <>
      <div className="bg-gray-100 p-5">
        <h1 className="font-semibold text-xl text-center ">
          Preview Application
        </h1>
      </div>

      <FormPreview data={data} />

      <div className="py-10 flex items-center justify-center">
        <button
          onClick={markAsSubmitted}
          className="bg-brand rounded-md text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2"
        >
          Confirm Submission
        </button>
      </div>
    </>
  );
}
