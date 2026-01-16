import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { AuthPage } from "./components/auth/AuthPage";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { AdminDashboard } from "./components/dashboards/AdminDashboard";
import { TeacherDashboard } from "./components/dashboards/TeacherDashboard";
import { StudentDashboard } from "./components/dashboards/StudentDashboard";
import { ParentDashboard } from "./components/dashboards/ParentDashboard";

function AppContent() {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user || !profile) {
    return <AuthPage />;
  }

  

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
