import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PlatformPage from "./pages/PlatformPage/PlatformPage";
import Disney from "./pages/Disney/Disney";
import Netflix from "./pages/Netflix/Netflix";
import PrimeVideo from "./pages/PrimeVideo/PrimeVideo";

function CustomRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/disney" element={<Disney />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/primevideo" element={<PrimeVideo />} />
      </Routes>
    </>
  );
}

export default CustomRouter;
