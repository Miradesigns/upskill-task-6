//  Question 1:
 const upskillProfile ={
    name:"Miracle Okonkwo",
    age:25,
    hobbies: ["Coding", "Designing", "Writing"],
    greet:function()
    {
    console.log("Hi, My name is " + this.name) 
    console.log("My second best hobby is:" , upskillProfile.hobbies[1])
    }
 };
 upskillProfile.greet();

//  Question 2:

function User(Title, callback) {
  console.log(Title);
  callback();
}

function message() {
console.log("Hey MIRA! improvement takes time, and you’re on the right path with Upskill DON'T give up! CHECK OUT YOUR TASK SCORES BELOW👇");

// Task scores 
let taskOneScore = 0;
var taskTwoScore = 10;
let taskThreeScore = 10;
console.log("Task One Score:", taskOneScore);
console.log("Task Two Score:", taskTwoScore);
console.log("Task Three Score:", taskThreeScore);

//Calculate total score
let totalScore = taskOneScore + taskTwoScore + taskThreeScore;
console.log("Your Total Score:", totalScore, );

}
User("UPSKILL TRACK:", message);
