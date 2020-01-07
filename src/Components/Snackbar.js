import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { fade } from "@material-ui/core/styles";

class  SimpleSnackbar extends Component {
  state={
      open: true
  }
  
  render(){
    setTimeout(() => {
        this.setState({
            open:false
          });
      }, 6000);
      
  return (
    <div>
            <Snackbar
                style={{fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900',}}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                variant="error"
                autoHideDuration={6000}
                open={this.state.open}
                >
                <SnackbarContent style={{backgroundColor:'white',fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900', fontSize: 16, color:'black'}}
                message="Made By Anton Kanugalawattage, 2020"
                />
            </Snackbar>
    </div>
  );
}
}

export default SimpleSnackbar


