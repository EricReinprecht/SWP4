import React, { Component } from "react";
import styles from './TaskAdder.module.css';

export default class TaskAdder extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:""
        }
        
    }

    addTask = ()=>{
        this.props.onTaskAdded(this.state.inputValue)
    }

    handleChange = (event)=>{
        this.setState({
            inputValue: event.target.value
        })
    }

    render(){
        return(
            <div id={styles.TaskAdderMain}>
                <input type='text' value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.addTask}>Add</button>
            </div>
        );
    }
}