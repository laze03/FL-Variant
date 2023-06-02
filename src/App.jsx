import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import "./App.css";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Filter from "./pages/Filter.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/FL-Variant/upload" element={<Home />}></Route>
        <Route
          exact
          path="/FL-Variant/dashboard"
          element={<Dashboard />}
        ></Route>
        <Route exact path="/FL-Variant/filter" element={<Filter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
