import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function AdmissionForm({ step }) {
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === "personal_info") {
      navigate("/admission/form?step=citizen_info");
    }

    if (step === "citizen_info") {
      navigate("/admission/form?step=address");
    }

    if (step === "address") {
      navigate("/admission/form?step=contact");
    }

    if (step === "contact") {
      navigate("/admission/form?step=admission_info");
    }

    if (step === "admission_info") {
      navigate("/admission/form?step=media");
    }
  };

//   formik
const formik = useFormik({
    initialValues: {
        first_name: ""
    },
    onSubmit: async (values) => {
        console.log("values", values);
    }
})

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-12 gap-5 mt-10">
        {/* when step in personal_info */}
        {step === "personal_info" && (
          <>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Father Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Mother Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>Date of Birth</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>Religion</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select language
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>Blood Group</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>Gender</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>
          </>
        )}

        {/* when step is citizen info */}
        {step === "citizen_info" && (
          <>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Student Birth Registration Or NID No</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Student Nationality</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select language
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Father NID Card No</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Father Nationality</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select language
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Mother NID Card No</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>Mother Nationality</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select language
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>
          </>
        )}

        {/* when step is address */}
        {step === "address" && (
          <>
            <div className="col-span-12 lg:col-span-6 gap-5">
              <div>
                <p className="font-bold text-base mb-3">Present Address</p>
                <div>
                  <input
                    type="text"
                    placeholder="Road Name & Road No"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Post Office"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Sub-Districe"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Districe"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 gap-5">
              <div>
                <p className="font-bold text-base mb-3">Permanent Address</p>
                <div>
                  <input
                    type="text"
                    placeholder="Road Name & Road No"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Post Office"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Sub-Districe"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Districe"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* when step is contact */}
        {step === "contact" && (
          <>
            <div className="col-span-12 lg:col-span-6 gap-5">
              <div>
                <div>
                  <label htmlFor="" className="mb-1 inline-block">
                    Mobile No
                  </label>
                  <input
                    type="text"
                    placeholder="Road Name & Road No"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <label htmlFor="" className="mb-1 inline-block">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Road Name & Road No"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 gap-5">
              <div>
                <div>
                  <label htmlFor="" className="mb-1 inline-block">
                    Alternate Mobile No
                  </label>
                  <input
                    type="text"
                    placeholder="Road Name & Road No"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* when step is admission info */}
        {step === "admission_info" && (
          <>
            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>Select Desired Class</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select language
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>Select Section</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>Select Group</label>
              <select className="select select-info w-full max-h-10">
                <option disabled selected>
                  Select
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </div>
          </>
        )}

        {/* when step is media */}
        {step === "media" && (
          <>
            <div className="col-span-6 flex flex-col gap-1">
              <label>Upload Picture</label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs h-10"
              />
            </div>

            <div className="col-span-6 flex flex-col gap-1">
              <label>Upload Signature</label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs h-10"
              />
            </div>
          </>
        )}

        {/* submit button */}
        <div className="col-span-12 flex items-center justify-center gap-3 mt-7">
          <div className="flex items-center justify-center gap-2">
            {(step === "citizen_info" ||
              step === "address" ||
              step === "contact" ||
              step === "admission_info" ||
              step === "media") && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                  }}
                  className="mx-auto w-fit mt-4 bg-brand rounded-full text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2"
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
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>

                  <span>Previous</span>
                </button>
              </>
            )}

            {step === "media" ? (
              <button
                type="submit"
                className="mx-auto w-fit mt-4 bg-brand rounded-full text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2"
              >
                <span>Preview Application</span>
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
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="mx-auto w-fit mt-4 bg-brand rounded-full text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2"
              >
                <span>Next</span>
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
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
