function rollNumber () {
    return [701,702,703,704,705,706,707];
}

let [A,B,C,D,E,F,G,H] = rollNumber ();

console.log("value of G = " + G); // 707
console.log("value of D = " + D); // 704
console.log("value of C = " + C); // 703
console.log(H); // undefined