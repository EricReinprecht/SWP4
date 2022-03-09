import React, { Component } from "react";
import styles from "./Card.module.css"

export default class Card extends Component{
    render(){
        return( <div className={styles.main}>
            <div idName={styles.profilePic}>
                <img src = "./johnDoe.png"></img>
            </div>
            <div className={styles.content}>
                <div className={styles.name}>
                   <p>John Doe</p>
                </div>
                <div className={styles.job}>
                   <p>Architect and Engineer</p>
                </div>
            </div>
        </div>)
    }
}