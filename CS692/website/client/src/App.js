import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import ForgetPassword from "./Pages/ForgetPassword";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import InProgressPage from "./Pages/InProgressPage";
import ProtectedComponent from './ProtectedComponent';
import ManageServices from './Pages/ManageServices';
import Favorites from "./Pages/Favourites";
import TrackingLoyalty from "./components/TrackingLoyalty";
import ServiceCardDetails from "./components/ServiceCardDetails";
import OrderHistory from "./Pages/OrderHistory";
import StatisticalData from "./Pages/StatisticalData";

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
        <Route path="/Service" element={<ManageServices/>}/>
        <Route path="/favourites" element={<Favorites/>}/>
        <Route path="/trackingLoyalty" element={<TrackingLoyalty/>}/>
        <Route path="/service-details/:id" element={<ServiceCardDetails />} />
        <Route path="/order-history/:id" element={<OrderHistory />} />
        <Route path="/statistical-data" element={<StatisticalData />} />
        
      </Routes>
    </div>
  );
}

export default App;
