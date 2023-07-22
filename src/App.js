import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './redux/slices/couter/counter';


function App() {
  const count = useSelector((state) => state.counter) //connection with store
  const dispatch = useDispatch() //what to do incr or decr
  return (
      <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <button onClick={()=>dispatch(increment())}>increment</button>
      <p>hi value is {count}</p>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      </header>
    </div>
    </>
  );
}

export default App;
