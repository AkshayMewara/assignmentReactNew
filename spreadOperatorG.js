let phoneNumber = [8734567230];
let copiedPhoneNumber = [...phoneNumber];
console.log("before phone number = " + phoneNumber);
console.log("before copied Phone Number = " + copiedPhoneNumber);
copiedPhoneNumber.push(7632329883); // original do not get updated
console.log(" after copied Phone Number = " + copiedPhoneNumber);
console.log("after phone number = " + phoneNumber);