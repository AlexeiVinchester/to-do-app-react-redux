import Proptypes from 'prop-types'
import { ToDo } from './ToDo'

const ToDoList = ({ todos, toggleToDo }) => {
    return (
        <ul>
            {
                todos.map((todo) => (
                    <ToDo
                        key={todo.id}
                        text={todo.text}
                        onCLick={() => toggleToDo(todo.id)}
                        completed={todo.completed}
                    />
                ))
            }
        </ul>
    )
}

ToDoList.propTypes = {
    todos: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            text: Proptypes.string.isRequired,
            completed: Proptypes.bool.isRequired
        }).isRequired
    ).isRequired,
    toggleToDo: Proptypes.func.isRequired
};

export { ToDoList }
