import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Result from "./pages/Result";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}
export default App;
