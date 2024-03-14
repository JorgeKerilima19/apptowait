import "./styles/App.css";
import { Navbar } from "./components";
import "./index.css";

import { Route, Routes } from "react-router-dom";
import { Browse, History, Home, Radio } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="history" element={<History />} />
        <Route path="radio" element={<Radio />} />
      </Route>
    </Routes>
  );
}

export default App;
