
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FarmingTips from "./pages/FarmingTips";
import Pastoralist from "./pages/Pastoralist";
import Weather from "./pages/Weather";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/farming" element={<FarmingTips />} />
        <Route path="/pastoralist" element={<Pastoralist />} />
        <Route path="/weather" element={<Weather />} />
       
      </Routes>
    </Router>
  );
}

export default App;
