import { useDispatch, useSelector } from "react-redux";
import { up, down } from '../../actions/Counter';


function Counter2() {
  const counter2 = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter2: {counter2}</h2>
      <button onClick={() => dispatch(up(2))}>Up 2</button>
      <button onClick={() => dispatch(down(5))}>Down 5</button>
    </>
  );
}

export default Counter2;