import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import MusicInfo from "../pages/MusicInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/musicinfo/:id" element={<MusicInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
