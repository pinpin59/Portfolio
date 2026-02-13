import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { SpinnerEmpty } from "./components/generic/Spinner";

// Lazy loading des pages
const Home = React.lazy(() => import("./scenes/Home/Home"));
const Projects = React.lazy(() => import("./scenes/Projects/Projects"));
const ProjectDetail = React.lazy(
  () => import("./scenes/Projects/ProjectDetail"),
);

const AppRouter = () => {
  return (
    <Suspense fallback={<SpinnerEmpty />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
