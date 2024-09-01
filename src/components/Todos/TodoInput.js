import { useDispatch } from "react-redux";
import { createTodo } from '../../actions/Todo';
import { useRef } from "react";
function TodoInput() {
  const dispatch = useDispatch();
  // dung useRef de clear du lieu nguoi dung nhap vao o o input
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.content.value !== "") {
      dispatch(createTodo(e.target.elements.content.value));
      // clear input
      inputRef.current.value = "";
      // focus lai input sau khi nguoi dung submit
      inputRef.current.focus();
    }
  }
  return (
    <>
      <div className="todo__input">
        <form onSubmit={handleSubmit}>
          {/* ref = {inputRef} truyen vao de clear o input va focus lai sau khi ng dung submit */}
          <input ref={inputRef} name="content"></input>
          <button type="submit">+</button>
        </form>
      </div>
    </>
  );
}

export default TodoInput;