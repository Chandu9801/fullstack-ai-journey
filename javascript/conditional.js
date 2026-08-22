// result checker
const marks = 85;
const attendance = 80;

if (marks >= 90 && attendance >= 75) {
    console.log("Excellent");
} else if (marks >= 40 && attendance >= 75) {
    console.log("Pass");
} else if (marks >= 40 && attendance < 75) {
    console.log("Not eligible due to attendance");
} else {
    console.log("Fail");
}