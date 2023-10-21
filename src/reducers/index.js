import { combineReducers } from "redux";
import { ADD_TASK, DELETE_TASK } from "../actions";


const taskReducers = (state = [], action) => {
    switch(action.type) {
        case ADD_TASK:
            state = state.concat(action.payload);
            break;
        case DELETE_TASK:
            state = state.filter((val, id) => action.payload !== id);
            break;
        default:
            break;
    }
    return state;
}

const reducers = combineReducers({
    tasks: taskReducers
})

export default reducers;