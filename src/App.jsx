import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Settings from "./pages/Settings/Settings";
import WorkExperience from "./pages/Settings/WorkExperience/WorkExperience";

import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navigate to the prepared page */}
        {/* <Route path="/" element={<Navigate to="/settings/work-experience" />} /> */}

        <Route path="/" element={<Layout />}>
          <Route path="settings" element={<Settings />}>
            <Route path="work-experience" element={<WorkExperience />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
