import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white"> 
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
