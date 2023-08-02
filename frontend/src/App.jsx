import { useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ErrorPage } from "./pages/ErrorPage";
import { FindOpportunitiesPage } from "./pages/FindOpportunitiesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { OrganizationMyOportunitiesPage } from "./pages/OrganizationMyOportunitiesPage";

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
          path="/profile/:id"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
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
