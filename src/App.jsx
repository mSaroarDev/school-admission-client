import Toploader from "@/components/Toploader";
import MasterLayout from "@/layout/MasterLayout";
import AdmissionFormPage from "@/pages/AdmissionForm";
import AdmissionHome from "@/pages/AdmissionHome";
import AdmissionTracking from "@/pages/AdmissionTracking";
import ApplicationPreview from "@/pages/ApplicationPreview";
import Homepage from "@/pages/Homepage";
import Dashboard from "@/pages/admin/Dashboard";
import List from "@/pages/admin/applications/List";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MasterLayout>
        <Toploader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admission/home" element={<AdmissionHome />} />
          <Route path="/admission/tracking" element={<AdmissionTracking />} />
          <Route path="/admission/form" element={<AdmissionFormPage />} />
          <Route path="/admission/application/preview/:id" element={<ApplicationPreview />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/applications" element={<List />} />
        </Routes>
      </MasterLayout>
    </>
  );
}

export default App;
