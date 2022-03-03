import React, { Component } from "react";
import styles from "./Button.module.css"

export default class List extends Component{
    render(){
        return( <div className={styles.main}>
            <div className={styles.button}>Sendar</div>
        </div>)
    }
}