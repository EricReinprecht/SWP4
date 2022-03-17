import React, { Component } from "react";
import styles from './TodoList.module.css';
import Todo from './Todo';

export default class TodoList extends Component{
    render(){
        return(
            <div class={styles.TodoListMain}>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
            </div>
        );
    }
}