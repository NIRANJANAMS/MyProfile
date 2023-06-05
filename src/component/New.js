import React, { Component } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@mui/material';
//import { Padding } from '@mui/icons-material';

export default class New extends Component {
  render() {
    return (
      <div className='icon' style={{backgroundColor:'black'}}>
        contact me on<br/>
        <Button><InstagramIcon/></Button>
        <Button><FacebookIcon/></Button>

      </div>
    )
  }
}
