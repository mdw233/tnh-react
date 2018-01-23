import { HAVE_FUN, TAKE_FUN, REDUX_FUN } from "./fun.actions";

const initialState = {
    funHad: 0,
    funTaken: 0,
    scream: "whimper",
    history: []
};

function tnhApp(state = initialState, action) {
    switch (action.type) {
        case HAVE_FUN:
            return Object.assign({}, state, {
                funHad: state.funHad + action.payload.funHad
            });
        case TAKE_FUN:
            return Object.assign({}, state, {
                funTaken: state.funTaken + 1
            });
        case REDUX_FUN:
            return Object.assign({}, state, {
                scream: action.payload.scream
            });
        default:
            return state;
    }
}

export default tnhApp;