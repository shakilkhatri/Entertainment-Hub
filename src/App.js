import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header.js";
import Trending from "./Pages/Trending/Trending.js";
import Movies from "./Pages/Movies/Movies.js";
import Series from "./Pages/Series/Series.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
