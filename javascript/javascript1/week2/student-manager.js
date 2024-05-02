const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName.trim() === "") {
    console.log("Cannot add an empty string to the class.");
    return;
  }

  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07.");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
    return;
  }

  class07Students.push(studentName);

  if (studentName === "Queen") {
    console.log("Long live the Queen! She has been added to the class.");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

// Test cases
addStudentToClass("Benjamin"); // Adds "Benjamin" to the class
addStudentToClass("Ali"); // Adds "Ali" to the class
addStudentToClass("Brad"); // Logs: Student Brad is already in the class
addStudentToClass("Angela"); // Adds "Angela" to the class
addStudentToClass("Queen"); // Adds "Queen" to the class despite being full
addStudentToClass(""); // Logs: Cannot add an empty string to the class

console.log(getNumberOfStudents());
