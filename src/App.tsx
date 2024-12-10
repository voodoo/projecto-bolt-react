import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from "@/components/layout/main-layout";
import { ProjectsPage } from "@/pages/projects";
import { CustomersPage } from "@/pages/customers";
import { SettingsPage } from "@/pages/settings";
import { CalendarPage } from "@/pages/calendar";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" replace />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;