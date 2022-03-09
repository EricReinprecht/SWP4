import React, { Component } from "react";
import styles from "./Vote.module.css"

export default class Vote extends Component{
    render(){
        return(
            <div className={styles.main}>
                <div className={styles.content}>
                    <h1>{this.props.candidate}</h1>
                    <h2>{this.props.votes}</h2>   
                </div>
            </div>
        )
    }
}