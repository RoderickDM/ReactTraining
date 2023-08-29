import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./component/pages/developer/settings/users/roles/Roles";
import Users from "./component/pages/developer/settings/users/Users";
import Other from "./component/pages/developer/settings/users/other/Other";
import System from "./component/pages/developer/settings/users/system/System";

function App() {
  return (
    <>
      <Router>
        <Routes>
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
