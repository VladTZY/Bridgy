import { useSelector } from "react-redux";
import { LoginPage } from "./pages/MiscPages/LoginPage";
import { HomePage } from "./pages/MiscPages/HomePage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { NotFoundPage } from "./pages/MiscPages/NotFoundPage";
import { ErrorPage } from "./pages/MiscPages/ErrorPage";
import { FindOpportunitiesPage } from "./pages/StudentPages/FindOpportunitiesPage";
import { ProfilePage } from "./pages/MiscPages/ProfilePage";
import { OrganizationMyOportunitiesPage } from "./pages/OrganizationPages/OrganizationMyOportunitiesPage";
import { PostOpportunitiesPage } from "./pages/OrganizationPages/PostOpportunitiesPage";
import { SchoolStudentsMyPage } from "./pages/SchoolPages/SchoolMyStudentsPage";
import { AddStudent } from "./pages/SchoolPages/AddStudent";
import { StudentDashboardPage } from "./pages/StudentPages/StudentDashboardPage";
import { OportunityPage } from "./pages/MiscPages/OportunityPage";

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
              <Navigate to="/login" />
            ) : (
              {
                STUDENT: <Navigate to="/student" />,
                ORGANIZATION: <Navigate to="/organization" />,
                SCHOOL: <Navigate to="/school" />,
              }[role]
            )
          }
        />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/student"
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
          path="/organization"
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
          path="/organization/my_opportunities"
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
          path="/school/my_students"
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
  return (
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
