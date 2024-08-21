import AdmissionForm from "@/components/AdmissionForm";
import { useSearchParams } from "react-router-dom";

export default function AdmissionFormPage() {
  // search params
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");

  return (
    <>
      <div className="bg-gray-100 p-5">
        <h1 className="font-semibold text-xl text-center ">Admission Form</h1>
      </div>
      <main className="p-10 w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-center">
          {/* steps bar */}
          <ul className="steps">
            <li className={`step ${step === "personal_info" || step === "citizen_info" || step === "address" || step === "contact" || step === "admission_info" || step === "media" ? "step-primary" : "" }`}>Personal Info</li>
            <li className={`step ${step === "citizen_info" || step === "address" || step === "contact" || step === "admission_info" || step === "media" ? "step-primary" : "" }`}>Citizen Info</li>
            <li className={`step ${step === "address" || step === "contact" || step === "admission_info" || step === "media" ? "step-primary" : "" }`}>Address</li>
            <li className={`step ${step === "contact" || step === "admission_info" || step === "media" ? "step-primary" : "" }`}>Contact</li>
            <li className={`step ${step === "admission_info" || step === "media" ? "step-primary" : "" }`}>Admission Info</li>
            <li className={`step ${step === "media" ? "step-primary" : "" }`}>Media</li>
          </ul>
        </div>
        <AdmissionForm step={step} />
      </main>
    </>
  );
}
