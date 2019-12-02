import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
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
        var percentChange = ((this.props.product.priceList[this.props.product.priceList.length-1].price-this.props.product.priceList[this.props.product.priceList.length-2].price)*100/this.props.product.priceList[this.props.product.priceList.length-2].price).toFixed(2)
        return (
                <div data-aos="fade-up" data-aos-offset="150">
                <div className="resultCard" style={{height: this.state.showGraph? '400px': '170px'}}>
                <div className="flex-containter" style={{  flex:'wrap', flexWrap: 'row',display: 'flex'}}>
                
                <div className="imgClass" style={{  display: 'inline-block',padding: '5px 10px 10px 10px'}}>
                    <img className="resultCardImg" style={{width: '160px', height: '160px'}}src={this.props.product.image}></img>
                </div>
                
                <div className="resultCardContent" style={{width: '800px', paddingLeft:'20px'}} >
                <h6 className="resultCardTitle" style={{margin:'5px', width:'800px'}}>{this.props.product.title}</h6>
                <h6 className="resultCardPrice" style={{margin:'5px', marginTop:'0px'}}>${this.props.product.priceList[this.props.product.priceList.length-1].price.toFixed(2)
                }<l style={{fontWeight:900, fontSize:19, color: percentChange>0? "#ff410c": percentChange<0? "rgb(84, 209, 0)": "#b3b1b0"}}> ({(percentChange>=0? "+":"") + percentChange}%)</l></h6>
                <div style={{display:'inline-block', float:'right'}}>
                <Rating name="read-only" value={this.props.product.rating}  precision={0.1} readOnly />
                </div>
                <br></br>
                <div style={{marginTop: this.props.product.title.length <= 78 ? '49px' : this.props.product.title.length <= 2*78 ? '23px': '-2px', float:'bottom'}}>
                <Button
                variant="contained"
                href={this.props.product.URL}
                target="_blank"
                style={{fontFamily:'avenir, sans-serif', fontWeight:'700',backgroundColor:'#FEBD69'}}
                endIcon={<CallMadeIcon/>}>View Product</Button>
                <Button
                style={{float:'right', fontFamily:'avenir, sans-serif', fontWeight:'700'}}
                onClick = {() => this.setState({showGraph:!this.state.showGraph})}
            startIcon={this.state.showGraph? <CloseIcon style={{color:"#ff410c", fontSize: 27, fontWeight: 900}}/>:<TimelineIcon style={{color:"rgb(84, 209, 0)", fontSize: 27, fontWeight: 900}}/>}>{this.state.showGraph? "Close Chart":"View Chart"}</Button>
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
