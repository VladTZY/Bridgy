import { useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ErrorPage } from "./pages/ErrorPage";
import { FindOpportunitiesPage } from "./pages/FindOpportunitiesPage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  let { id } = useParams();

  return (
    <div>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Navigate to="/login" /> : {
          STUDENT: <Navigate to="/student" />,
          ORGANIZATION: <Navigate to="/organization" />,
          SCHOOL: <Navigate to="/school" />,
        }[role] } />
        <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" /> } />
        <Route path="/student" element={(role == "STUDENT") ? <HomePage/> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="/organization" element={(role == "ORGANIZATION") ? <HomePage/> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="/school" element={(role == "SCHOOL") ? <HomePage/> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="/student/find_opportunities" element={(role == "STUDENT") ? <FindOpportunitiesPage/> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="/profile/:id" element={isLoggedIn ? ProfilePage(id) : <Navigate to="/login" /> } />
        <Route path="*" element={ <NotFoundPage /> } />
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
  )
}

export default WrappedApp;
