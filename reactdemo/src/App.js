import { useCallback, useState } from 'react';
import './App.css';
import Counter from './components/08 Funktionale Komponenten/Counter';
import CounterFunction from './components/08 Funktionale Komponenten/CounterFunction';

function App() {
  return (
    <div className="app">
      <div className='main'>
        <div className='counter'>
          <Counter/>
        </div>
        <div className='counterFunc'>
          <CounterFunction/>
        </div>
         
        
      </div>
        
    </div>
  );
}

export default App;
