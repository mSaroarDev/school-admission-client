import BackButton from "@/components/BackButton";
import FormPreview from "@/components/FormPreview";
import Loader from "@/components/loader/Loader";
import { getApplicationDetails, previewApplication } from "@/libs/application";
import { showError } from "@/utils/showToast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ApplicationPreview() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  // get application id
  const [data, setData] = useState();
  const getApp = async () => {
    try {
      setLoading(true);
      const res = await getApplicationDetails(id);
      if (res.ok) {
        const data = await res.json();
        setData(data?.data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getApp();
  }, [id]);

  //   action this application
  const previewApp = async (value) => {
    Swal.fire({
      title: "Confirm..!",
      text: `Are you sure you want to mark this as ${value}`,
      icon: "question",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await previewApplication(id, { currStatus: value });
          if (res.ok) {
            Swal.fire({
              title: "Success..!",
              text: `The  application marked as ${value}`,
              icon: "success",
            });
          } else {
            showError("Review Failed");
          }
        } catch (error) {
          console.log(error);
          showError("Internal Server Error");
        } finally {
          setLoading(false);
          getApp();
        }
      }
    });
  };

  return loading ? <Loader /> : (
    <>
      <div className="p-7">
        <div className="flex items-center justify-between">
          <BackButton />

          <div className="flex items-center gap-2">
            <button
              onClick={() => previewApp("Accepted")}
              className="bg-[#02AC4B] text-white px-4 py-2 rounded"
            >
              Accept
            </button>
            <button
              onClick={() => previewApp("Waiting")}
              className="bg-[#F6B000] text-white px-4 py-2 rounded"
            >
              Waiting
            </button>
            <button
              onClick={() => previewApp("Rejected")}
              className="bg-[#D23B3C] text-white px-4 py-2 rounded"
            >
              Reject
            </button>
          </div>
        </div>

        <h1 className="font-semibold text-xl text-center mb-5">
          Preview Application (Current Status is:{" "}
          <span
            className={`text-sm px-1 rounded ${
              data?.currStatus === "Submitted" || data?.currStatus === "Waiting"
                ? "bg-[#F6B000] text-black"
                : data?.currStatus === "Accepted"
                ? "bg-[#02AC4B] text-white"
                : "bg-[#D23B3C] text-white"
            }`}
          >
            {data?.currStatus}
          </span>
          )
        </h1>
      </div>

      <FormPreview data={data} />
    </>
  );
}
