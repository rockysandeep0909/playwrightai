let age=19;
let drivingLicense=true;

if(age>=18 && drivingLicense==false) {
    console.log("Person is eligible to drive.");
} else {
    console.log("Person is not eligible to drive.");
}

// making use of || operator
if(age>=18 || drivingLicense==false) {
    console.log("Person is eligible to drive.");
}
