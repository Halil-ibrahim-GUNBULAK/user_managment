import React,{useState,useRef} from 'react'
const { v4: uuidv4 } = require('uuid');
const TodoField =  ({ addTodo }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleClick = () => {
    addTodo({
      id: uuidv4(),
      name: value,
      status: false,
    });
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className="todoField">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todoField__input"
      />
      <button onClick={() => handleClick()} className="todoField__btn">
        add
      </button>
    </div>
  );

}

export default TodoField