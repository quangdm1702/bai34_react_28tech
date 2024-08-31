import { useDispatch, useSelector } from 'react-redux';
import { up, down, reset } from '../../actions/Counter';

function Counter() {
  const counter = useSelector(state => state.counterReducer);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(up(5))}>Up 5</button>
      <button onClick={() => dispatch(down(3))}>Down 3</button>
      <button onClick={() => dispatch(reset())}>Reset 0</button>
    </>
  );
}

export default Counter;