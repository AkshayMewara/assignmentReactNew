function add(...args){
    let total = 0;
    for(const x of args){
        total += x;
    }
    return total;
}

console.log(add(1,2,3,4,5,6,7,8,9,10));

console.log(add(10,45,75,24));