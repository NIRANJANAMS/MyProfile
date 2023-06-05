import './App.css';
import './component/NavbarComp.css'
import NavbarComp from './component/NavbarComp';

//import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Biodata from "./component/Biodata";

//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 

import New from './component/New';

function App() {
  return (
   
    
    <div className="App">
    
      
  
     <BrowserRouter>
    
     
    
     <NavbarComp />
     
      <Routes>

        
        <Route path='/Home' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About />}/>
      
      <Route path='/Biodata' element={<Biodata/>}/>
      
      </Routes>

      <New/>
    
      </BrowserRouter>
      
   
    
    </div>
    
  );
}

export default App;