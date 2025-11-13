import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Loading from "./Components/Loading";
import { useState } from "react";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
   
  const [isLoading, setIsLoading] = useState(() => {
   return window.location.pathname === "/" 
  });
  const [hasLoadedOnce, setHasLoadedOnce] = useState(() => {
    return window.location.pathname.startsWith('/projects/');
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasLoadedOnce(true);
  };

  return (
    <BrowserRouter>
      {isLoading && !hasLoadedOnce && (
        <Loading onComplete={handleLoadingComplete} />
      )}
      <Routes>
        <Route index element={<Home isLoading={isLoading} />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
