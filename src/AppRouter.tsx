import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy loading des pages
const Home = React.lazy(() => import("./scenes/Home/Home"));
const Projects = React.lazy(() => import("./scenes/Projects/Projects"));
const ProjectDetail = React.lazy(
  () => import("./scenes/Projects/ProjectDetail"),
);

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
