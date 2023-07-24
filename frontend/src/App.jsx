import { useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) return <LoginPage />;

  return <HomePage />;
}

export default App;
