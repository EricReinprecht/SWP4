import React, { Component } from "react";
import { FaBeer } from 'react-icons/fa';
import styles from './Todo.module.css';



export default class Todo extends Component{
    state = {   }
    render(){
        return(
            <div class={styles.TodoMain}>
                <div>{this.props.title}</div>
                <div>{this.props.isDone}</div>
                <div><FaBeer/></div>
            </div>
        );
    }
}