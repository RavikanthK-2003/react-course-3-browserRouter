import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from './components/Navbar';
import Careers from "./components/Careers";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/careers" Component={Careers} />
      </Routes>   
    </>    
  );
}

export default App;
