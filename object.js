let studentInfo = {
    rollno: 1,
    name: "Ravi",
    course: "MCA",
    college: "KIET",
    marks: [10, 23, 45, 34, 33],
    music: () => console.log("play music"),
    play: function playFun() {console.log("play cricket");},
};
let arrayValue = [studentInfo, studentInfo,studentInfo];
arrayValue.forEach(item => console.log(item.name));
console.log(studentInfo);
