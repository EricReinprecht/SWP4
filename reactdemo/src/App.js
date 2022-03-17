import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/09 React Todo-List/Header';
import TaskAdder from './components/09 React Todo-List/TaskAdder';
import TodoList from './components/09 React Todo-List/TodoList';



function App() {
  return (
    <div className="app">
      <div className='main'>
        <Header/>
        <TaskAdder/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
