import { useSelector } from "react-redux";
import { LoginPage } from "./pages/MiscPages/LoginPage";
import { HomePage } from "./pages/MiscPages/HomePage";
import { Navbar } from "./components/Navbar";
import { MiniNavbar } from "./components/MiniNavbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { NotFoundPage } from "./pages/MiscPages/NotFoundPage";
import { ErrorPage } from "./pages/MiscPages/ErrorPage";
import { FindOpportunitiesPage } from "./pages/StudentPages/FindOpportunitiesPage";
import { ProfilePage } from "./pages/MiscPages/ProfilePage";
import { OrganizationMyOportunitiesPage } from "./pages/OrganizationPages/OrganizationMissionsPage";
import { PostOpportunitiesPage } from "./pages/OrganizationPages/PostOpportunitiesPage";
import { SchoolStudentsMyPage } from "./pages/SchoolPages/SchoolDashboardPage";
import { AddStudent } from "./pages/SchoolPages/AddStudent";
import { StudentDashboardPage } from "./pages/StudentPages/StudentDashboardPage";
import { OportunityPage } from "./pages/MiscPages/OportunityPage";
import { LandingPage } from "./pages/MiscPages/LandingPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <LandingPage />
            ) : (
              {
                STUDENT: <Navigate to="/student/dashboard" />,
                ORGANIZATION: <Navigate to="/organization/dashboard" />,
                SCHOOL: <Navigate to="/school/dashboard" />,
              }[role]
            )
          }
        />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/student/dashboard"
          element={
            role == "STUDENT" ? (
              <HomePage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/organization/dashboard"
          element={
            role == "ORGANIZATION" ? (
              <HomePage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/school"
          element={
            role == "SCHOOL" ? (
              <HomePage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student/find_opportunities"
          element={
            role == "STUDENT" ? (
              <FindOpportunitiesPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student/dashboard"
          element={
            role == "STUDENT" ? (
              <StudentDashboardPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/organization/missions"
          element={
            role == "ORGANIZATION" ? (
              <OrganizationMyOportunitiesPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/organization/post_opportunities"
          element={
            role == "ORGANIZATION" ? (
              <PostOpportunitiesPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/school/dashboard"
          element={
            role == "SCHOOL" ? (
              <SchoolStudentsMyPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/school/add_student"
          element={
            role == "SCHOOL" ? (
              <AddStudent />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile/:id"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/oportunity/:id"
          element={isLoggedIn ? <OportunityPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  const role = useSelector((state) => state.auth.role);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      {
        {
          true:
            <div>
              <MiniNavbar />
              <div className="space-x-80">
                <div>
                  <Sidebar />
                </div>
                <div>
                  <App />
                </div>
                <div>
                  <Footer />
                </div>
              </div>
            </div>,
          false:
            <div>
              <Navbar />
              <App />
              <Footer />
            </div>
        }[isLoggedIn]
      }
    </BrowserRouter>
  );
}

export default WrappedApp;
