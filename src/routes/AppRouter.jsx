import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Lodging from "../pages/Lodging";
import About from "../pages/About";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lodging/:id" element={<Lodging />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
