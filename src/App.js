import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const [input, setInput] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const addTodo = () => {
        if (input.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: input });
        setInput("");
    };

    return (
        <div style={{ background: "skyblue", padding: "20px", minHeight: "100vh" }}>
            <h2>TODO</h2>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ padding: "5px", width: "250px" }}
                />
                <button onClick={addTodo} style={{ marginLeft: "10px" }}>
                    Добавить
                </button>
            </div>

            <h3>TODOS</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{
                            background: "moccasin",
                            marginBottom: "10px",
                            padding: "10px",
                            borderRadius: "8px",
                            boxShadow: "1px 1px 2px rgba(0,0,0,0.2)"
                        }}
                    >
                        {todo}
                    </li>
                ))}
            </ul>

            <p>Всего: {todos.length}</p>
        </div>
    );
}

export default App;
