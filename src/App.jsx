import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import "./App.css";
import Home from "./pages/Home.jsx";
import Result from "./pages/Results.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/result" element={<Result />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
