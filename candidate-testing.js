clear





const input = require('readline-sync');

let candidateName = ""; 
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
}


function runProgram() {
  askForName();
  console.log(`Candidate Name: ${candidateName}`)
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

