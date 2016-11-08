import { combineReducers } from 'redux';

function reducer(state = {}, action) {
    switch (action.type) {
        case "DO":
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    reducer
});