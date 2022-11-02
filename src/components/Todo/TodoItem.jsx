
function TodoItem({id, name, deleteTodo}) {
    const handleDeleteTodo = () => {
        deleteTodo(id)
    }
    return ( 
        <div className="todo-item">
            <p>{name}</p>
            <button className="btn-delete" onClick={handleDeleteTodo}>X</button>
        </div>
    );
}

export default TodoItem;