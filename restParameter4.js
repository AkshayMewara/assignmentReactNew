const combineStrings = (...args) => {
    return args.reduce(function(prev, cur){
        return prev + " " + cur;
    });
};

console.log(combineStrings('hello','world'));