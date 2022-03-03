import React, { Component } from "react";
import styles from "./Card.module.css"

export default class Card extends Component{
    render(){
        return( <div className={styles.main}>
            <div idName={styles.profilePic}>
                <img src = "./public/johnDoe.png"></img>
            </div>
            
            <div className={styles.content}>
                <div idName={styles.name}>John Doe</div>
                <div idName={styles.job}>Architect and Engineer</div>
            </div>
        </div>)
    }
}