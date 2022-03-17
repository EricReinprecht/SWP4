import React, { Component } from "react";
import styles from './TaskAdder.module.css';

export default class TaskAdder extends Component{
    render(){
        return(
            <div id={styles.TaskAdderMain}>
                <input type='text'/>
                <button>Add</button>
            </div>
        );
    }
}