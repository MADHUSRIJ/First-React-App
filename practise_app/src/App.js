import './App.css';
import {MyButton} from './components/MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <button className="buttonStyle">Default Button</button>
         <MyButton/>
      </header>
    </div>
  );
}

export default App;
