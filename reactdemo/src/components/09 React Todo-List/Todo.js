import React, { Component } from "react";
import styles from './Todo.module.css';

export default class Todo extends Component{
    render(){
        return(
            <div class={styles.TodoMain}>
                <div>Einkaufen</div>
                <div>Icon</div>
            </div>
        );
    }
}