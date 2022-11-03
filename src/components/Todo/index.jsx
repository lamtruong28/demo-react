import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./TodoItem";

const initTodo = [
    {
        id:1,
        name:'Learn ReactJS'
    },
    {
        id:2,
        name:'Learn TypeScript',
    },
    {
        id:3,
        name:'Learn Redux',
    },
]

function Todo() {
    const [todoList, setTodoList] = useState(initTodo);
    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        todo && setTodoList([...todoList, {id: uuidv4(), name: todo}]);
        setTodo('');
    }

    const deleteTodo = (id)=> {
        setTodoList(todoList.filter(todo=>todo.id !== id))
    }

    return ( 
        <section className='todo-wrapper'>
            <h1 style={{textAlign:'center'}}>TODO APP</h1>
            <div className="todo-input">
                <input
                    className='input'
                    type="text"
                    placeholder="Input todo ..."
                    value={todo}
                    onChange={(e=>setTodo(e.target.value))}
                />
                <button className='btn-add' onClick={handleAddTodo}>Add</button>
            </div>
            <div className="todo-list">
                {
                    todoList.map((todo)=> 
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        deleteTodo={deleteTodo}
                    />)
                }
            </div>
        </section>
     );
}

export default Todo;