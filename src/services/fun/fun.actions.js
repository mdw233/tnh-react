export const HAVE_FUN = "HAVE_FUN";
export const TAKE_FUN = "TAKE_FUN";
export const REDUX_FUN = "REDUX_FUN";

export function haveFun(howMuch = 5) {
    return {
        type: HAVE_FUN,
        payload: {
            funHad: howMuch
        }
    };
}

export function reduxFun() {
    return {
        type: REDUX_FUN,
        payload: {
            scream: "furiosaaaaaaaa"
        }
    }
}