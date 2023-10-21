export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}