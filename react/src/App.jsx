import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/lost-items" element={<LostItems />} />
        <Route path="/found-items" element={<FoundItems />} />

        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
