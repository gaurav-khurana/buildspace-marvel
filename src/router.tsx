import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PlatformPage from "./pages/PlatformPage/PlatformPage";

function CustomRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
      </Routes>
    </>
  );
}

export default CustomRouter;
