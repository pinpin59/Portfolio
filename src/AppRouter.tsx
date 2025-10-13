import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./scenes/Home/Home";
import Projects from "./scenes/Projects/Projects";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
