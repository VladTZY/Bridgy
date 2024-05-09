import { useSelector } from "react-redux";
import { LoginPage } from "./pages/SharedPages/LoginPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { NotFoundPage } from "./pages/SharedPages/NotFoundPage";
import { ErrorPage } from "./pages/SharedPages/ErrorPage";
import { FindOpportunitiesPage } from "./pages/StudentPages/FindOpportunitiesPage";
import { ProfilePage } from "./pages/SharedPages/ProfilePage";
import { MissionsPage } from "./pages/OrganizationPages/MissionsPage";
import { PostOpportunitiesPage } from "./pages/OrganizationPages/PostOpportunitiesPage";
import { SchoolDashboardPage } from "./pages/SchoolPages/SchoolDashboardPage";
import { AddStudentPage } from "./pages/SchoolPages/AddStudentPage";
import { StudentDashboardPage } from "./pages/StudentPages/StudentDashboardPage";
import { InfoPage } from "./pages/SharedPages/InfoPage";
import { LandingPage } from "./pages/SharedPages/LandingPage";
import { CreateAdminPage } from "./pages/SuperAdminPages/CreateAdminPage";
import { CreateOrganizationPage } from "./pages/AdminPages/CreateOrganizationPage";
import { CreateSchoolPage } from "./pages/AdminPages/CreateSchoolPage";
import { MyExperiencesPage } from "./pages/StudentPages/MyExperiencesPage";
import { OrganizationDashboardPage } from "./pages/OrganizationPages/OrganizationDashboardPage";
import { NotificationsPage } from "./pages/SharedPages/NotificationsPage";
import { AddPersonalEventPage } from "./pages/StudentPages/AddPersonalEvent";
import { MeetOurCharitiesPage } from "./pages/SharedPages/MeetOurCharitiesPage";

import NavBar from "./components/sharedComponents/NavBar";
import SideBar from "./components/sharedComponents/SideBar";
import Footer from "./components/sharedComponents/Footer";

import { Box, CssBaseline } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  return (
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
        path="/meet_our_charities"
        element={!isLoggedIn ? <MeetOurCharitiesPage /> : <Navigate to="/" />}
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
        path="/student/add_personal_event"
        element={
          role == "STUDENT" ? (
            <AddPersonalEventPage />
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
            <OrganizationDashboardPage />
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
            <MissionsPage />
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
            <SchoolDashboardPage />
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
        path="/admin/create_school"
        element={
          role == "ADMIN" || role == "SUPER_ADMIN" ? (
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
          role == "ADMIN" || role == "SUPER_ADMIN" ? (
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
        path="/notifications"
        element={isLoggedIn ? <NotificationsPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile/:id"
        element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/opportunity/:id"
        element={isLoggedIn ? <InfoPage /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function WrappedApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        {
          {
            true: (
              <Box>
                <CssBaseline />
                <NavBar />
                <Box sx={{ display: "flex" }}>
                  <SideBar />
                  <App />
                </Box>
                <Footer />
              </Box>
            ),
            false: <App />,
          }[isLoggedIn]
        }
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default WrappedApp;
