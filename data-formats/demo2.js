//Create a JS object that represents a student object
//all students have an Id, full name, grade, GPA, Age,
//Names of Siblings
let student = {
    id: 123,
    full_name: "Bob Smith",
    grade: "Freshman",
    gpa: 4.0,
    age: 18,
    siblings: ["Tom", "Sally", "Pam"]
}
//Print the JS Object out
console.log(student);


//Convert Student JS Object to JSON
const myStudent = JSON.stringify(student);


//Print the JSON Stuent  Object Out
console.log(myStudent);