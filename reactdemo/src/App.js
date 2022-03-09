import './App.css';
import Vote from './components/06 React Properties/Vote';

function App() {
  return (
    <div className="App">
      <Vote candidate="Hans" votes="3"/>
      <Vote candidate="Xafer" votes="7"/>
      <Vote candidate="Jodok" votes="13"/>
    </div>
  );
}

export default App;
