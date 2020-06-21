var startBtn = document.getElementById("startBtn");
var questionDiv = document.getElementById("questions");
console.log(questionDiv);
var currentQuestionIndex = 0;

// The array of questions for our quiz game.
var questions = [
    //questions from quizlet: https://quizlet.com/za/444626000/ict1512-javascript-exam-prep-truefalse-questions-flash-cards/
    { q: 'The statement document.write("This is a text string."); prints "This is a text string".', a: 'f' },
    { q: 'You can use a text string as a literal value or assign it to a variable.', a: 't' },
    { q: 'A function must return a value.', a: 'f' },
    { q: 'Assignment operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, and division.', a: 'f' },
    { q: 'In an infinite loop, a loop statement never ends because its conditional expression is never truthy.', a: 'f' }
];

// We start the game with a score of 0.
var score = 0;


let buttonsArray = document.querySelectorAll(".answerBtn");
    buttonsArray.forEach(function(elem) {
        elem.addEventListener("click", function(){
            var question = document.getElementById("questionText");
            question.innerHTML = questions[currentQuestionIndex].q;
            var answer = elem.id
            console.log(answer);
        
            if (questions.length > currentQuestionIndex){
                currentQuestionIndex++
            }

            if (
                (answer === true && questions[i].a === 't') ||
                (answer === false && questions[i].a === 'f')
              ) {
                // Increase score
                score++;
                document.getElementById("answerCorrect").innerHTML = "Correct!";
                
              } else {
                document.getElementById("answerCorrect").innerHTML = 'Wrong!';
              }
        });
    });


var startQuiz = function(){   
    
  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    //var answer = (questions[i].q);
    
    
    // var question = document.createElement("h3");
    // question.innerHTML = questions[i].q;
    // questionDiv.appendChild(question);

    var answer = questions[i].a;
    // Compare answers
    if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
      // Increase score
      score++;
      document.getElementById("answerCorrect").innerHTML = "Correct!";
      
    } else {
      document.getElementById("answerCorrect").innerHTML = 'Wrong!';
    }
  }
}

// Show total at end
document.getElementById('main').innerHTML = 'You got ' + score + '/' + questions.length;

startBtn.onclick = startQuiz;
