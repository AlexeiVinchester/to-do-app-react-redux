import { connect } from "react-redux";
import { toggleToDo, visibilityFilters } from "../actions"
import { ToDoList } from "../components/ToDoList";

/* 
    This component will be a wrapper for ToDoList component
    ToDoList component has todos - array, and toggleToDo - func-callback, as props
    That's why we shoul return this two props
*/


const getVisibleToDos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL: 
            return todos;
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleToDos(state.todos, state.visibleFilter)
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        toggleToDo: (id) => dispatch(toggleToDo(id)),
    };
};

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProp)(ToDoList)

export { VisibleToDoList }