/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.filter(student=>student.marks>=50)
  .map(student=>console.log(`Name:${arr.name},Age:${arr.age}:Marks:${arr.marks}`));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if (student.marks >= 50) {
      console.log(
        `Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`
      );
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = { id: 4, name: "Himanshu", age: "22", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let pass = arr.filter(student=>student.marks>=50);
  console.log(pass);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newStudents = [    { id: 5, name: "Saurabh", age: "21", marks: 65 },    { id: 5, name: "Lakhan", age: "20", marks: 75 },    { id: 6, name: "yakoob", age: "19", marks: 55 }  ];
  let combinedArray = arr.concat(newStudents);
  console.log(combinedArray);
}
