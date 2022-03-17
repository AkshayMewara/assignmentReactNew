let phoneNumber = [8492300483];
let copiedPhoneNumber = phoneNumber;
console.log("before phone number = " + phoneNumber);
console.log("before copied phone number = " + copiedPhoneNumber);
copiedPhoneNumber.push(6538297329); // changes are made in original also
console.log("after copied phone number = " + copiedPhoneNumber);
console.log("after phone number = " + phoneNumber);