import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count+1)}>Add 1</button>
    </div>
  );
}

export default App;
