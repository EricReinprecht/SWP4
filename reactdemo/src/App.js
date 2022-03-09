import './App.css';
import Vote from './components/07 React State/Vote';

function App() {
  return (
    <div className="app">
      <div className="candidates">
        <Vote candidate="Hans" address="Doren"/>
        <Vote candidate="Xafer" address="Krumbach"/>
        <Vote candidate="Jodok" address="Hittisau"/>
      </div>
    </div>
  );
}

export default App;
