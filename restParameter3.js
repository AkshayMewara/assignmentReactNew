function sum(...args){
    return args
    .filter(function(e) { 
        return typeof e === 'number';
    })
    .reduce(function(prev, cur){
        return prev + cur;
    });
};

console.log(sum(20,'dsfge',65,null,undefined,34,undefined));