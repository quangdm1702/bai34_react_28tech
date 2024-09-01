import { useSelector, useDispatch } from 'react-redux';
import { completedTodo, deleteTodo, undoTodo } from '../../actions/Todo';

function TodoList() {
  const todoList = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const handleCompleted = (id) => {
    dispatch(completedTodo(id));
    console.log(id);
  }

  const handleUndo = (id) => {
    dispatch(undoTodo(id));
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }
  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map(item => (
            <li className='todo__item' key={item.id}>
              <span className={'todo__content ' + (item.completed === true && "todo__content--completed")}>{item.content}</span>
              {item.completed ? (
                <button onClick={() => handleUndo(item.id)}>U</button>
              ) : (
                <button onClick={() => handleCompleted(item.id)}>V</button>
              )}
              <button onClick={() => handleDelete(item.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;