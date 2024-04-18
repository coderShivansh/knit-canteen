import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/orders" element={<Ordersscreen />} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="/admin/*" element={<Adminscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
