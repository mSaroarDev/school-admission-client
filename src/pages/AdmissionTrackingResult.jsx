import FormPreview from "@/components/FormPreview";
import Loader from "@/components/loader/Loader";
import { getApplicationDetailsByTrackingId } from "@/libs/application";
import { showError } from "@/utils/showToast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AdmissionTrackingResult() {
  const navigate = useNavigate();
  const { trackingId } = useParams();
  const [loading, setLoading] = useState(false);

  //   get result
  const [data, setData] = useState({});
  const getAppDetails = async () => {
    try {
      setLoading(true);
      const res = await getApplicationDetailsByTrackingId(trackingId);
      console.log(res);

      if (res.status === 404) {
        showError("The tracking id is invalid");
        navigate("/admission/tracking");
      } else if (res.status === 200) {
        const data = await res.json();
        setData(data?.data);
      }
    } catch (error) {
      console.log(error);
      showError("Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAppDetails();
  }, [trackingId]);

  // navigate function
  const [trackinId, setTrackingId] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackinId) {
      return showError("Please input tracking id");
    }
    navigate(`/admission/tracking/${trackinId}`);
  };

  return (
    <>
      <div className="bg-gray-100 p-5">
        <h1 className="font-semibold text-xl text-center ">
          Admission Tracking
        </h1>
      </div>
      <main className="p-10 w-full mx-auto">
        <form className="flex flex-wrap items-center justify-center gap-5 mb-5">
          <label htmlFor="">Admission Tracking No:</label>
          <input
            type="text"
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
            required
          />

          <button
            onClick={handleSubmit}
            className="bg-brand rounded-md text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2"
          >
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <span>Search</span>
          </button>
        </form>

        {loading ? <Loader /> : <FormPreview data={data} />}

        {/* <PDFPrint comp={<FormPreview data={data} />} /> */}
      </main>
    </>
  );
}
