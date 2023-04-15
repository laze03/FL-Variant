import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import "./App.css";
import Home from "./pages/Home.jsx";
import Result from "./pages/Results.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/FL-Variant" element={<Home />}></Route>
        <Route exact path="/FL-Variant/result" element={<Result />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
