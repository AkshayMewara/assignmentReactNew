let x = 10;
if (x == 10) {
    let x = 20;
    let x = 30; // redeclaration not alllowed in let
    console.log(x); // error
}