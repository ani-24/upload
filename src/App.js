import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin-login" exact element={<Login />} />
        <Route path="/admin" exact element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
