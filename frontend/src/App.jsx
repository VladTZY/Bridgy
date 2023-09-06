import { useSelector } from "react-redux";
import { LoginPage } from "./pages/MiscPages/LoginPage";
import { HomePage } from "./pages/MiscPages/HomePage";
import { MiniNavbar } from "./components/MiniNavbar";
import { Sidebar } from "./components/Sidebar";
import { MiniFooter } from "./components/MiniFooter";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { NotFoundPage } from "./pages/MiscPages/NotFoundPage";
import { ErrorPage } from "./pages/MiscPages/ErrorPage";
import { FindOpportunitiesPage } from "./pages/StudentPages/FindOpportunitiesPage";
import { ProfilePage } from "./pages/MiscPages/ProfilePage";
import { OrganizationMyOportunitiesPage } from "./pages/OrganizationPages/MissionsPage";
import { PostOpportunitiesPage } from "./pages/OrganizationPages/PostOpportunitiesPage";
import { SchoolStudentsMyPage } from "./pages/SchoolPages/SchoolDashboardPage";
import { AddStudentPage } from "./pages/SchoolPages/AddStudentPage";
import { StudentDashboardPage } from "./pages/StudentPages/StudentDashboardPage";
import { MoreInfoPage } from "./pages/MiscPages/MoreInfoPage";
import { LandingPage } from "./pages/MiscPages/LandingPage";
import { CreateAdminPage } from "./pages/SuperAdminPages/CreateAdminPage";
import { CreateOrganizationPage } from "./pages/AdminPages/CreateOrganizationPage";
import { CreateSchoolPage } from "./pages/AdminPages/CreateSchoolPage";
import { MyExperiencesPage } from "./pages/StudentPages/MyExperiencesPage";
import { UpdatesPage } from "./pages/SchoolPages/UpdatesPage";

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
                ADMIN: <Navigate to="admin/create_school" />,
                SUPER_ADMIN: <Navigate to="super_admin/create_admin" />,
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
              <StudentDashboardPage />
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
          path="/student/my_experiences"
          element={
            role == "STUDENT" ? (
              <MyExperiencesPage />
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
              <AddStudentPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/school/updates"
          element={
            role == "SCHOOL" ? (
              <UpdatesPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/create_school"
          element={
            role == "ADMIN" ? (
              <CreateSchoolPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/create_organization"
          element={
            role == "ADMIN" ? (
              <CreateOrganizationPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/super_admin/create_school"
          element={
            role == "SUPER_ADMIN" ? (
              <CreateSchoolPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/super_admin/create_organization"
          element={
            role == "SUPER_ADMIN" ? (
              <CreateOrganizationPage />
            ) : isLoggedIn ? (
              <ErrorPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/super_admin/create_admin"
          element={
            role == "SUPER_ADMIN" ? (
              <CreateAdminPage />
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
          path="/opportunity/:id"
          element={isLoggedIn ? <MoreInfoPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      {
        {
          true: (
            <div>
              <MiniNavbar />
              <div className="flex h-[84%] bg-gray-100">
                <div className=" w-[20%] bg-white">
                  <Sidebar />
                </div>
                <div className="w-full overflow-scroll">
                  <App />
                </div>
              </div>
              <MiniFooter />
            </div>
          ),
          false: <App />,
        }[isLoggedIn]
      }
    </BrowserRouter>
  );
}

export default WrappedApp;
