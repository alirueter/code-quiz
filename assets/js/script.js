
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

  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);

    // Compare answers
    if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
      // Increase score
      score++;
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }

  // Show total at end
  alert('You got ' + score + '/' + questions.length);
