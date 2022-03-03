import React, { Component } from "react";
import styles from "./List.module.css"

export default class List extends Component{
    render(){
        return( <div className={styles.main}>
            <div className={styles.content}>Coffee</div>
            <div className={styles.content}>Tea</div>
            <div className={styles.content}>Beer</div>
        </div>)
    }
}