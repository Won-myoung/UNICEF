import "./App.css";
import Header from "./Header";
import Doing from "./Doing";
import Sponsor from "./Sponsor";
import Introduce from "./pages/Introduce";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Doing />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
