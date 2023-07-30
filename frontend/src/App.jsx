import { useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) return <LoginPage />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<div> <Navbar/> <HomePage/></div>} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

function BasicApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) return <LoginPage />;

  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default WrappedApp;
