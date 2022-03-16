let tollTax = () => 0.2 ; //per km
let totalTax = (km, tax = km * tollTax()) =>{
        return km + tax;
}

let taxToPay = totalTax(200);

console.log(taxToPay);

console.log(totalTax(400));