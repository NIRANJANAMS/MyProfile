import React from 'react'
import { Form } from 'react-router-dom'

function Biodata() {
  return (
    <div className='bio'>
<form className='form'>
    <div>
        <br/>
        <h1 style={{marginLeft:'280px'}}>BIODATA</h1>
       <br/> <table className='table'>
            <tr>
                <td style={{padding:'5px'}}>
                    <label>NAME</label>
                </td>    
                <td style={{paddingLeft:'100px'}}><label>Niranjana .M.S</label></td>
            </tr>


            <tr>
                <td style={{padding:'5px'}}>
                    <label>DOB</label>
                </td>    
                <td style={{paddingLeft:'100px'}}><label>31/08/1999</label></td>
            </tr>


            <tr>
                <td style={{padding:'5px'}}>
                    <label>ADDRESS</label>
                </td>    
                <td style={{paddingLeft:'100px'}}><address>MOLATH(H),N.A.D(PO),<br/>ALUVA,ERNAKULAM,<br/>KERALA<br/>pincode:683563</address></td>
            </tr>
            <tr>
                <td style={{padding:'5px'}}>
                    <label>EMAIL ID</label>
                </td>    
                <td style={{paddingLeft:'100px'}}><label>msniranjana99@gmail.com</label></td>
            </tr>
            <tr>
                <td style={{padding:'5px'}}>
                    <label>phone no</label>
                </td>    
                <td style={{paddingLeft:'100px'}}><label>6282572815</label></td>
            </tr>

            <tr>
                <td style={{padding:'5px'}}>
                    <label>Qualifications</label>
                </td>    
                <td style={{paddingLeft:'100px'}}><ol><li><label>BTECH<br/> FROM: College of engineering,TVM<br/>
        year:2024 </label></li><br/>
        <li><label>DIPLOMA<br/> GPTC,KALAMASSERY<br/>
        year:2021 </label>
        

        
                </li></ol></td>
            </tr>

            <tr>
                <td style={{padding:'5px'}}>
                    <label>SKILLS</label>
                </td>    
                <td style={{paddingLeft:'100px'}}><label>C,C++,JAVA,PYTHON,HTML,CSS,JAVASCRIPT</label></td>
            </tr>
        
        </table>

    </div>
</form>
        
       {/* Name:Niranajna ms<br/>
  Age:23<br/>
  <address>Address:Molath house, N.A.D,aluva ekm kerala</address>
  
      <p>Phone.no:8745639752,7351056271</p>
      <p>Email:remya3764@gmail.com

</p>

   
      <h3>Qualification:</h3>
      <p>
        Diploma:
        <br/>
        From:GPTC, KALLAMASSERY
        YEAR:2021
        <br/>

        
        Btech:
<br/>        from:college of engineering,tvm<br/>
        year:2024

      </p>
   
      <p><h3>Specialization</h3>
     

      
      </p> */}
    
     
 
     
    </div>
  )
}

export default Biodata
