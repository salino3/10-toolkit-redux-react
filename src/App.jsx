import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// import { increment } from "./store/slices/counter";
import {
  decrement,
  increment,
  incrementBy,
} from "./store/slices/counter/counterSlices.js";




 const App =  () => {

 const {counter} =  useSelector(state => state.counter)
const dispatch = useDispatch()
  return (
    <>
      <div className="App">
          <h3> count is:  <span style={{color:'yellow'}}>{counter}</span></h3>
          <p>
            <button onClick={() => dispatch(increment())}>Increment</button>{" "}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementBy(2))}>
              Increment by 2
            </button>{" "}
          </p>
      </div>
    </>
  );
}

export default App;
