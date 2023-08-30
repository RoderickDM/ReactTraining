import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./component/pages/developer/settings/users/roles/Roles";
import Users from "./component/pages/developer/settings/users/Users";
import Other from "./component/pages/developer/settings/users/other/Other";
import System from "./component/pages/developer/settings/users/system/System";
import SystemLogin from "./component/pages/access/developer/SystemLogin";
import SystemForgotPassword from "./component/pages/access/developer/SystemForgotPassword";
import SystemCreatePassword from "./component/pages/access/developer/SystemCreatePassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/system/login" element={<SystemLogin />} />
          <Route
            path="/system/forgot-password"
            element={<SystemForgotPassword />}
          />
          <Route
            path="/system/create-password"
            element={<SystemCreatePassword />}
          />

          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/users/roles" element={<Roles />} />
          <Route path="/settings/users/systems" element={<System />} />
          <Route path="/settings/users/other" element={<Other />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
