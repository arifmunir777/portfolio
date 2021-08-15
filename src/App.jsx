 import TopBar from "./components/top/TopBar";
 import Intro from './components/Intro/Intro'
 import Works from './components/Work/Work';
 import Contact from './components/Contact/Contact';
 import Portfolio from './components/Portfolio/Portfolio'
 import Testimonial from './components/Testimonials/Testimonials';
 import { useState } from "react";
 import './app.scss';
import Menu from "./components/menu/Menu";
 function App() {
   const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="App">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu   menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="section">
        
           <Intro/>
           <Portfolio/>
           <Works/>
           <Testimonial/>
           <Contact/>
        </div>
    </div>
  );
}

export default App;
