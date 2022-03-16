function concatStrings(...args){
    let array = [];
    for (const z of args){
        array.push(z);
    }
    return (array);
}

console.log(concatStrings('rahul','piyush','shyam','salman'));

