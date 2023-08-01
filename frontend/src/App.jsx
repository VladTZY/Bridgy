import { useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ErrorPage } from "./pages/ErrorPage";
import { FindOpportunitiesPage } from "./pages/FindOpportunitiesPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={!isLoggedIn ? <Navigate to="/login" /> : {
          STUDENT: <Navigate to="/student" />,
          ORGANIZATION: <Navigate to="/organization" />,
          SCHOOL: <Navigate to="/school" />,
        }[role] } />
        <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" /> } />
        <Route path="/student" element={(role == "STUDENT") ? <div> <Navbar/> <HomePage/></div> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="/organization" element={(role == "ORGANIZATION") ? <div> <Navbar/> <HomePage/></div> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="/school" element={(role == "SCHOOL") ? <div> <Navbar/> <HomePage/></div> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="/student/find_opportunities" element={(role == "STUDENT") ? <FindOpportunitiesPage/> : (isLoggedIn ? <ErrorPage /> : <Navigate to="/login" />) } />
        <Route path="*" element={ <NotFoundPage /> } />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<div> <Navbar/> <HomePage/></div>} />
        <Route path="/organization" element={<div> <Navbar/> <HomePage/></div>} />
        <Route path="/school" element={<div> <Navbar/> <HomePage/></div>} />
>>>>>>> refs/remotes/origin/main
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WrappedApp;
