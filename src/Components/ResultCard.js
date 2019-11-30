import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TimelineIcon from '@material-ui/icons/Timeline';
import Rating from '@material-ui/lab/Rating';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Graphs from './Graphs';

AOS.init();
class ResultCard extends Component {
    state={
        showGraph:false
    }
    render() {
        return (
                <div data-aos="fade-up" data-aos-offset="150">
                <div className="resultCard" style={{height: this.state.showGraph? '400px': '170px'}}>
                <div className="flex-containter" >
                
                <div className="imgClass">
                    <img className="resultCardImg" src={this.props.product.image}></img>
                </div>
                
                <div className="resultCardContent" >
                <h6 className="resultCardTitle" style={{margin:'5px'}}>{this.props.product.title}</h6>
                <h6 className="resultCardPrice" style={{margin:'5px', marginTop:'0px'}}>${this.props.product.priceList[this.props.product.priceList.length-1].price.toFixed(2)}</h6>
                <div style={{display:'inline-block'}}>
                <Rating name="read-only" value={this.props.product.rating}  precision={0.1} readOnly />
                </div>
                <br></br>
                <div style={{marginTop: this.props.product.title.length < 75 ? '45px' : '20px', float:'bottom'}}>
                <Button
                variant="contained"
                href={this.props.product.URL}
                target="_blank"
                style={{disply: "inherit", fontFamily:'avenir', fontWeight:'700',backgroundColor:'#FEBD69'}}
                endIcon={<CallMadeIcon/>}>View Product</Button>
                <Button
                // variant="outlined"
                // border: '2px solid #FEBD69'
                style={{float:'right', dispaly: "inherit", fontFamily:'avenir', fontWeight:'700'}}
                onClick = {() => this.setState({showGraph:!this.state.showGraph})}
                startIcon={this.state.showGraph? <ExpandLessIcon/>:<TimelineIcon/>}>View Chart</Button>
                </div>
                </div>
                
            </div> 
            {this.state.showGraph?
                <Graphs productInfo={this.props.product}/> :
                null}
            </div>
            </div>
         );            
    }
}

export default ResultCard