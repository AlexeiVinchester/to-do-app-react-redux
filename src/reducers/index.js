import { combineReducers } from "redux";
import { todos } from "./todos";
import { visibleFilter } from "./visibilityFilter";

const reducer = combineReducers(todos, visibleFilter);

export {reducer}