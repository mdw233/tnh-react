export const HAVE_FUN = "HAVE_FUN";
export const TAKE_FUN = "TAKE_FUN";

export function haveFun(howMuch = 5) {
    return {
        type: HAVE_FUN,
        payload: {
            funHad: howMuch
        }
    };
}
