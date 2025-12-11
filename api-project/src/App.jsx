import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import DogGenerator from "./DogGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<DogGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
