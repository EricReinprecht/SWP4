import React, { Component } from "react";
import styles from "./Vote.module.css"

export default class Vote extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            mouseOverCount: 0
        };
    }

    voted = ()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    mouseOver = ()=>{
        this.setState({
            mouseOverCount: this.state.mouseOverCount + 1
        })
        console.log(this.props.candidate);
    }  

    render(){
        return(
            <div onClick={this.voted} onMouseOver={this.mouseOver} className={styles.main}>
                <div className={styles.content}>
                    <h1>{this.props.candidate}</h1>
                    <h4>{this.props.address}</h4>
                    <h2>{this.state.counter}</h2>   
                </div>
            </div>
        )
    }
}