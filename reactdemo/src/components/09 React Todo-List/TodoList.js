import React, { Component } from "react";
import styles from './TodoList.module.css';
import Todo from './Todo';

export default class TodoList extends Component{

    getTodos(){
        let widgets = [];
        this.props.todos.forEach(todo =>{
            widgets.push(<Todo title={todo.name} isDone={todo.done} />);
        });
        return widgets;
    }


    render(){
        return(
            <div class={styles.TodoListMain}>
                {this.getTodos()}
            </div>
        );
    }
}