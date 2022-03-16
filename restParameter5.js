function substract(value,valueA,...args){
    let addForSub = value + valueA;
    for(const x of args){
        addForSub += x;
    }
    return 1000 - addForSub;
}

console.log('substraction from 1000 = ' + substract(10,20,30,100));

