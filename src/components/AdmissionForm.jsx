import { createApplication } from "@/libs/application";
import { showError, showSuccess } from "@/utils/showToast";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdmissionForm({ step }) {
  const navigate = useNavigate();
  const [pictureLoading, setPictureLoading] = useState(false);
  const [signLoading, setSignLoading] = useState(false);

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

  const [picture, setPicture] = useState();
  const [sign, setSign] = useState();

  // handle picture upload
  function handleImageUpload(event) {
    try {
      setPictureLoading(true);
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "preset_pathsala_client");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/duhrur1jj/image/upload`,
          formData
        )
        .then((res) => {
          setPicture(res.data.secure_url);
          formik.setFieldValue("image", res.data.secure_url);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    } finally {
      setPictureLoading(false);
    }
  }

  // handle picture upload
  function handleSignUpload(event) {
    try {
      setSignLoading(true);
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "preset_pathsala_client");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/duhrur1jj/image/upload`,
          formData
        )
        .then((res) => {
          setSign(res.data.secure_url);
          formik.setFieldValue("sign", res.data.secure_url);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    } finally {
      setSignLoading(false);
    }
  }

  //   formik
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      father_name: "",
      mother_name: "",
      dob: "",
      religion: "",
      blood_group: "",
      gender: "",
      st_nid: "",
      st_nationality: "",
      f_nid: "",
      f_nationality: "",
      m_nid: "",
      m_nationality: "",
      road1: "",
      post1: "",
      sub_dist1: "",
      dist1: "",
      zip1: "",
      road2: "",
      post2: "",
      sub_dist2: "",
      dist2: "",
      zip2: "",
      mobile: "",
      email: "",
      alt_mobile: "",
      classe: "",
      section: "",
      group: "",
      image: "",
      sign: "",
    },
    onSubmit: async (values, { resetForm }) => {
      // check if input is empty
      const {
        first_name,
        last_name,
        father_name,
        mother_name,
        dob,
        religion,
        blood_group,
        gender,
        st_nid,
        st_nationality,
        f_nid,
        f_nationality,
        m_nid,
        m_nationality,
        road1,
        post1,
        sub_dist1,
        dist1,
        zip1,
        road2,
        post2,
        sub_dist2,
        dist2,
        zip2,
        classe,
        section,
        group,
        image,
        sign,
      } = values;

      if (
        !first_name ||
        !last_name ||
        !father_name ||
        !mother_name ||
        !dob ||
        !religion ||
        !blood_group ||
        !gender ||
        !st_nid ||
        !st_nationality ||
        !f_nid ||
        !f_nationality ||
        !m_nid ||
        !m_nationality ||
        !road1 ||
        !post1 ||
        !sub_dist1 ||
        !dist1 ||
        !zip1 ||
        !road2 ||
        !post2 ||
        !sub_dist2 ||
        !dist2 ||
        !zip2 ||
        !classe ||
        !section ||
        !group ||
        !image ||
        !sign
      ) {
        return showError("Please input * marks fields");
      }

      Swal.fire({
        title: "Confirm?",
        text: "Are you sure to submit.",
        icon: "question",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await createApplication(values);
            if (res.ok) {
              const data = await res.json();
              showSuccess("Application Submitted");
              resetForm();
              navigate(`/admission/application/preview/${data?.data?._id}`);
            } else {
              showError("Failed");
            }
          } catch (error) {
            console.log(error);
            showError("Internal Server Error");
          }
        }
      });
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-12 gap-5 mt-10"
      >
        {/* when step in personal_info */}
        {step === "personal_info" && (
          <>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                First Name <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                placeholder="John"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Last Name <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                placeholder="Doe"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Father Name <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="father_name"
                name="father_name"
                value={formik.values.father_name}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Mother Name <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="mother_name"
                name="mother_name"
                value={formik.values.mother_name}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>
                Date of Birth <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>
                Religion <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="religion"
                name="religion"
                value={formik.values.religion}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select One</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddho">Buddho</option>
                <option value="Christian">Christian</option>
                <option value="Others">Others...</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>
                Blood Group <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="blood_group"
                name="blood_group"
                value={formik.values.blood_group}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="A (+ve)">A (+ve)</option>
                <option value="A (-ve)">A (-ve)</option>
                <option value="B (+ve)">B (+ve)</option>
                <option value="B (-ve)">B (-ve)</option>
                <option value="AB (+ve)">AB (+ve)</option>
                <option value="AB (-ve)">AB (-ve)</option>
                <option value="O (+ve)">O (+ve)</option>
                <option value="O (-ve)">O (-ve)</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>
                Gender <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others..</option>
              </select>
            </div>
          </>
        )}

        {/* when step is citizen info */}
        {step === "citizen_info" && (
          <>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Student Birth Registration Or NID No{" "}
                <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="st_nid"
                name="st_nid"
                value={formik.values.st_nid}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Student Nationality{" "}
                <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="st_nationality"
                name="st_nationality"
                value={formik.values.st_nationality}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Father NID Card No{" "}
                <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="f_nid"
                name="f_nid"
                value={formik.values.f_nid}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Father Nationality{" "}
                <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="f_nationality"
                name="f_nationality"
                value={formik.values.f_nationality}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Mother NID Card No{" "}
                <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="text"
                id="m_nid"
                name="m_nid"
                value={formik.values.m_nid}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered input-info w-full h-10 text-sm"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
              <label>
                Mother Nationality{" "}
                <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="m_nationality"
                name="m_nationality"
                value={formik.values.m_nationality}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </>
        )}

        {/* when step is address */}
        {step === "address" && (
          <>
            <div className="col-span-12 lg:col-span-6 gap-5">
              <div>
                <p className="font-bold text-base mb-3">
                  Present Address{" "}
                  <span className="text-xs text-red-600">*</span>
                </p>
                <div>
                  <input
                    type="text"
                    id="road1"
                    name="road1"
                    value={formik.values.road1}
                    onChange={formik.handleChange}
                    placeholder="Road Name & Road No"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="post1"
                    name="post1"
                    value={formik.values.post1}
                    onChange={formik.handleChange}
                    placeholder="Post Office"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="sub_dist1"
                    name="sub_dist1"
                    value={formik.values.sub_dist1}
                    onChange={formik.handleChange}
                    placeholder="Sub-Districe"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="dist1"
                    name="dist1"
                    value={formik.values.dist1}
                    onChange={formik.handleChange}
                    placeholder="Districe"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="zip1"
                    name="zip1"
                    value={formik.values.zip1}
                    onChange={formik.handleChange}
                    placeholder="Zip Code"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 gap-5">
              <div>
                <p className="font-bold text-base mb-3">
                  Permanent Address{" "}
                  <span className="text-xs text-red-600">*</span>
                </p>
                <div>
                  <input
                    type="text"
                    id="road2"
                    name="road2"
                    value={formik.values.road2}
                    onChange={formik.handleChange}
                    placeholder="Road Name & Road No"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="post2"
                    name="post2"
                    value={formik.values.post2}
                    onChange={formik.handleChange}
                    placeholder="Post Office"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="sub_dist2"
                    name="sub_dist2"
                    value={formik.values.sub_dist2}
                    onChange={formik.handleChange}
                    placeholder="Sub-Districe"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="dist2"
                    name="dist2"
                    value={formik.values.dist2}
                    onChange={formik.handleChange}
                    placeholder="District"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <input
                    type="text"
                    id="zip2"
                    name="zip2"
                    value={formik.values.zip2}
                    onChange={formik.handleChange}
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
                    Mobile No <span className="text-xs text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    placeholder="017"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />

                  <label htmlFor="" className="mb-1 inline-block">
                    Email{" "}
                    <span className="text-xs text-green-600">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="example@gmail.com"
                    className="input input-bordered input-info w-full h-10 text-sm mb-2"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 gap-5">
              <div>
                <div>
                  <label htmlFor="" className="mb-1 inline-block">
                    Alternate Mobile No{" "}
                    <span className="text-xs text-green-600">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="alt_mobile"
                    name="alt_mobile"
                    value={formik.values.alt_mobile}
                    onChange={formik.handleChange}
                    placeholder="017"
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
              <label>
                Select Desired Class{" "}
                <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="classe"
                name="classe"
                value={formik.values.classe}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>
                Select Section <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="section"
                name="section"
                value={formik.values.section}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>

            <div className="col-span-6 md:col-span-4 flex flex-col gap-1">
              <label>
                Select Group <span className="text-xs text-red-600">*</span>
              </label>
              <select
                id="group"
                name="group"
                value={formik.values.group}
                onChange={formik.handleChange}
                className="select select-info w-full max-h-10"
              >
                <option>Select</option>
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
          </>
        )}

        {/* when step is media */}
        {step === "media" && (
          <>
            <div className="col-span-6 flex flex-col gap-1">
              <label>
                Upload Picture <span className="text-xs text-red-600">*</span>
              </label>
              <input
                onChange={handleImageUpload}
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs h-10"
              />

              {pictureLoading && <span>Uploading. Please wait...</span>}
              {picture && <img src={picture} className="w-24 h-auto" />}
            </div>

            <div className="col-span-6 flex flex-col gap-1">
              <label>
                Upload Signature <span className="text-xs text-red-600">*</span>
              </label>
              <input
                type="file"
                onChange={handleSignUpload}
                className="file-input file-input-bordered file-input-primary w-full max-w-xs h-10"
              />
              {signLoading ? <span>Uploading. Please wait...</span> : ""}
              {sign && <img src={sign} className="w-24 h-auto" />}
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
