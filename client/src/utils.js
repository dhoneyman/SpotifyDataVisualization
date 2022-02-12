export const catchErrors = fn => {
    return function(...args) {
        return fn(...args).catchErrors((err) => {
            console.error(err);
        })
    }
}