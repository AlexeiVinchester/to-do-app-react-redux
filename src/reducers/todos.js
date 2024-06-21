import { 
    ADD_TO_DO,
    TOGGLE_TO_DO
} from "../actions";

/* 
    In todo reducer state will be an array of tasks
    In every case we should return array of tasks
*/

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_DO: 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TO_DO: 
            return state.map((todo, index) => {
                if(index === action.id){
                    return {
                        ...todo, 
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        default: 
            return state;
    }
}

export {todos}