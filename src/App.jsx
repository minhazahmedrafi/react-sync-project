import "./App.scss";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "swiper/css/bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/article/Article";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
