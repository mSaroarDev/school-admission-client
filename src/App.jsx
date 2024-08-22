import Toploader from "@/components/Toploader";
import MasterLayout from "@/layout/MasterLayout";
import AdmissionFormPage from "@/pages/AdmissionForm";
import AdmissionHome from "@/pages/AdmissionHome";
import AdmissionSuccess from "@/pages/AdmissionSuccess";
import AdmissionTracking from "@/pages/AdmissionTracking";
import AdmissionTrackingResult from "@/pages/AdmissionTrackingResult";
import ApplicationPreview from "@/pages/ApplicationPreview";
import Homepage from "@/pages/Homepage";
import LoginPage from "@/pages/LoginPage";
import Dashboard from "@/pages/admin/Dashboard";
import AppDetails from "@/pages/admin/applications/Details";
import List from "@/pages/admin/applications/List";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MasterLayout>
        <Toaster />
        <Toploader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admission/home" element={<AdmissionHome />} />
          <Route path="/admission/tracking" element={<AdmissionTracking />} />
          <Route path="/admission/tracking/:trackingId" element={<AdmissionTrackingResult />} />
          <Route path="/admission/form" element={<AdmissionFormPage />} />
          <Route path="/admission/application/preview/:id" element={<ApplicationPreview />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/applications" element={<List />} />
          <Route path="/admin/applications/:id" element={<AppDetails />} />
          <Route path="/admission/success" element={<AdmissionSuccess />} />
          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      </MasterLayout>
    </>
  );
}

export default App;
