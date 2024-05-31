console.log("----------Marksheet Calculator----------");

// function sum(subject1, subject2, subject3, subject4, subject5) {
//     return subject1 + subject2 + subject3 + subject4 + subject5;
// }
let chem, phy, math, bio, comp;
let sumOfMarks, percentage, totalMarks = 500;

// Total marks of all subjects are 100
document.writeln("Obtained Marks: ");
chem = window.prompt("Enter the marks of chemistry:");
document.writeln("Chemistry: " +chem);
phy = window.prompt("Enter the marks of physics:");
document.writeln("physics: " +phy);
math = window.prompt("Enter the marks of maths:");
document.writeln("Maths: " +math);
bio = window.prompt("Enter the marks of biology:");
document.writeln("bio: " +bio);
comp = window.prompt("Enter the marks of computer:");
document.writeln("Computer: " +comp);

// sumOfMarks = sum(chem,phy,math,bio,comp);
sumOfMarks = chem + phy + math + bio + comp;
document.writeln("Total Obtained Marks: " +sumOfMarks);
percentage = (sumOfMarks * 100) / totalMarks;
document.writeln("Percentage: " +percentage);