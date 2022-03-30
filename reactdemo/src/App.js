import { useCallback, useDebugValue, useState } from 'react';
import { Component } from 'react';
import './App.css';
import Header from './components/09 React Todo-List/Header';
import TaskAdder from './components/09 React Todo-List/TaskAdder';
import TodoList from './components/09 React Todo-List/TodoList';

export default class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
          "id" : 1,
          "name" : "einkaufen",
          "done" : false
        },
        {
          "id" : 2,
          "name" : "putzen",
          "done" : false
        }
      ] 
    }
  }

  addTask = (value)=>{
    let todo = {
      id: 1,
      name: value,
      done: false
    }

    let todos = this.state.todos;
    todos.push(todo);

    this.setState({
      todos: todos
    })
}

  render(){
    return (
      <div className="app">
        <div className='main'>
          <Header/>
          <TaskAdder onTaskAdded={this.addTask}/>
          <TodoList todos ={this.state.todos}/>
        </div>
      </div>
    );
  }
}
