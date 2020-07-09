import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

const App = () => {
  const [ count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
