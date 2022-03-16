const name = ["rahul"];
console.log("before " + name); // before rahul
name.push("rakesh");
console.log("after " + name); // after rahul rakesh 
name.push(1);
console.log(name); // rahul rakesh 1
name.push(2);
console.log(name); // rahul rakesh 1 2