import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import ForgetPassword from "./Pages/ForgetPassword";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import InProgressPage from "./Pages/InProgressPage";
import ProtectedComponent from './ProtectedComponent';


function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/register" element = {<RegistrationForm />} />
        <Route path = "/forget-password" element = {<ForgetPassword />} />
        <Route path = "*" element = {<NotFound />} />
        <Route path="/account/profile" element={<ProtectedComponent component={Profile} />} />
        <Route path = "/in-progress" element = {<InProgressPage />} />
      </Routes>
    </div>
  );
}

export default App;
