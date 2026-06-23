import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import Compare from "./pages/Compare";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;