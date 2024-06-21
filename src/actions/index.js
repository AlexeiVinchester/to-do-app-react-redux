let nextId = 0;

export const ADD_TO_DO = 'ADD_TO_DO';
export const TOGGLE_TO_DO = 'TOGGLE_TO_DO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addToDo = (text) => {
    return {
        type: ADD_TO_DO,
        id: nextId++,
        text
    };
};

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TO_DO,
        id
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}