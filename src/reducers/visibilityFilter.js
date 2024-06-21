import { 
    visibilityFilters,
    SET_VISIBILITY_FILTER
 } from "../actions";

/* 
    in visibleFiilter reducer state will be standart filter SHOW_ALL
    In every case we should return filter-string
*/

const visibleFilter = (state = visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: 
            return action.filter
        default: 
            return state;
    }
}

export {visibleFilter}