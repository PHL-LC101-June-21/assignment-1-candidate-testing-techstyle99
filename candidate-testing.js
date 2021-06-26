

const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let candidateName = ""; 
let candidateAnswers = [];

let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5+3)/2*10=? ", 
  "Given the array[8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
];


function askForName(){
  candidateName = input.question("Enter your name here: "); 
  console.log(`Hello ${candidateName}! welcome.\n`)
} 

// askForName(); 
let questions = [
  "Who was the first American woman in space?: ", 
  "True or false: 5 kilometer == 5000 meters?: ", 
  "(5 + 3)/2 * 10 = ?: ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?: ", 
  "What is the minimum crew size for the ISS?: "
]; 

let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
]; 

let answers = []; 
function askQuestion(){
  for (i=0; i<questions.length; i++){
    answer = input.question((`${i+1}) ` + questions[i])); 
    answers.push(answer); 
    console.log(`your answer: ${answer}`); 
    console.log(`correct answer: ${correctAnswers[i]}\n`); 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer = input.question(question)
  for (let i = 0; i < questions.length; i++){
    question = questions[i]; 
    candidateAnswer = input.question(question);
    candidateAnswers.push(candidateAnswer); 
  }

  candidateAnswer = input.question(question)
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let correctAnswerCounter = 0;
  console.log("\n------------Let's see how well you have done------------")
  for (let i = 0; i < questions.length; i++) {
    question = questions[i]; 
    candidateAnswer = candidateAnswers[i]; 
    correctAnswer = correctAnswers[i]; 
    console.log(`\n${i+1}) ${question}`);
    console.log(`Your Answer: ${candidateAnswer}`);
    console.log(`Correct Answer: ${correctAnswer}`); 
    if (candidateAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      correctAnswerCounter += 1; 
    }
  } 
=======
  if (candidateAnswers === correctAnswer) {
    console.log("Your answer is correct!")
  } else {
    console.log("Your answer is incorrect!")
>>>>>>> 08ea8a13bdddf3d7b8326c115fce8ac2d8384ca4
  }
}

// askQuestion(); 
function gradeQuiz(correctAnswers){
  let totalQuestion = questions.length
  let totalCorrectAnswers = 0; 
  for (i=0; i<questions.length; i++){
    // how do i access function 'askQuestion'-scoped variable 'answer' in this function ?
    let answer = answers[i].trim().toLowerCase(); 
    let correctAnswer = correctAnswers[i].trim().toLowerCase()
    if (answer === correctAnswer){
      totalCorrectAnswers += 1; 
    }
  }
      // outside for loop
      let percentage = (totalCorrectAnswers/totalQuestion)*100; 
      console.log(`>>> Overall grade: ${percentage}% (${totalCorrectAnswers} of ${totalQuestion} responses correct) <<<`)
      if (percentage >= 80){
        console.log(">>> Status: Passed! <<<")
      } else {
        console.log(">>> Status: Failed! <<<")
      }
  let grade;
  
  let grade = correctAnswerCounter / questions.length * 100; 
  console.log("\n------------------ Grade Reports ------------------")
  console.log(`\n>>> Overall Grade: ${grade}% (${correctAnswerCounter} of ${questions.length} responses correct) <<<`);
  if (grade >= 80){
  console.log(`>>> Status: PASSED <<<`); 
  } else {
  console.log(`>>> Status: FAILED <<<`); 
  }
  return grade;
>>>>>>> 08ea8a13bdddf3d7b8326c115fce8ac2d8384ca4
        08ea8a13bdddf3d7b8326c115fce8ac2d8384ca4
}


function runProgram() {
  askForName();
  console.log(`Candidate Name: ${candidateName}`)
  // TODO 1.1c: Ask for candidate's name //

    console.log("This is Jeopardy, " + candidateName + ", Welcome and Good Luck.")
=======
    console.log("Hello " + candidateName + ", welcome here.")
  

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  // question: question,
  // correctAnswer: correctAnswer,
  // candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  // candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

