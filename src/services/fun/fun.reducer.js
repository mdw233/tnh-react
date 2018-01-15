import { HAVE_FUN, TAKE_FUN } from "./fun.actions";

const initialState = {
    funHad: 0,
    funTaken: 0,
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
        default:
            return state;
    }
}

export default tnhApp;