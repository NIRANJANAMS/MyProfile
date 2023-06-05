import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function about() {
  return (
    <div className='above'>
    <div className='about' style={{margin :'20px'}}><h1>About me</h1>
   
      <h2>who im i?</h2>
      <h3><p>HEY! I'm Niranajna MS.<br/>I am a computer grad student from CET.I love exploring 
      <br/>new technologies and often amazed by the progress we as a 
      <br/> human species have mad so far in the recent years 
<br/><br/><br/></p></h3>


{ <Button variant='contained' color='primary' ><Link to='/biodata'>BIODATA</Link></Button>}
    </div></div>
     
   
  )
}

export default about
