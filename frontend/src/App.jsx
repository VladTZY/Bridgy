import { useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  if (!isLoggedIn) return <LoginPage />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<div> <Navbar/> <HomePage/></div>} />
        <Route path="/organization" element={<div> <Navbar/> <HomePage/></div>} />
        <Route path="/school" element={<div> <Navbar/> <HomePage/></div>} />
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
