import "./App.css";
import Header from "./Header";
import Home from "./doing";
import Info from "./pages/Info";
import State from "./pages/State";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/state" element={<State />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
