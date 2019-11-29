import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Add from './Add';

class Navbar extends Component {
    render() {
        return (
          <AppBar position="fixed" style={{ background: "#131A22", maxHeight:"63px",}}>
            <Toolbar>
              <Typography variant="h6" style={{ fontSize:'25px',  fontFamily:'Avenir', fontWeight:'900'}}>Price Watch</Typography>
                <img src={'/assets/logo.png'}  alt='' style={{marginLeft:'10px',height:'36px',}}></img>
                <div style={{ flexGrow:'1'}}></div>
                <p style={{ fontFamily:'avenir', fontWeight:'900', fontSize:'19px', marginTop:'3px', marginRight:'-10px'}} className='text-AppBar'>Add Product</p>
              {/* <Add/> */}
            </Toolbar>
          </AppBar>
         );            
    }
}

export default Navbar