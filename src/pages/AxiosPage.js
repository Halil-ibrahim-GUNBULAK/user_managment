import axios from "axios";
import { useEffect, useState } from "react";
function AxiosPage() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((res) => {
            console.log("res", res);
            setTodos(res.data);
          });
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchTodos();
    console.log("fecch then todos", todos);
  }, [todos]);

  return (
    <div>
      <div>Merhaba Dünya</div>
      <div className="todo-wrapper">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div key={todo.id} className="todo">
              <h3 className="todo-title">{todo.title}</h3>
              <input
                type="checkbox"
                checked={todo.completed}
                className="todo-completed"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default AxiosPage;
