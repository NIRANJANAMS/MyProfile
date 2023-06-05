//import { ShapeLine } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    
    <div className='nav'>
    <h1>Niranjana M S</h1> 
   <br/><br/>
   
       <div className='navitem'>
     
   
      <span ><Link to="/Home">home</Link></span>
            
           <span> <Link to="/About">About me</Link></span>
            
           <span> <Link to="/Contact">contact</Link></span>
          
           <div className='nav1'>
 </div>
            </div> 
            <div className='name'>
  
      </div>
     

    
  


      </div>
  )
}

export default NavbarComp