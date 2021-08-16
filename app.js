// import functions and grab DOM elements
const buttonEl = document.getElementById('quiz-element');
const resultsEl = document.getElementById('results-element');

import { aYesAnswer } from './utils.js';

buttonEl.addEventListener('click', () => {
  // local state -- lives inside a function
    let correctAnswers = 0;

    const firstName = prompt('Hello! Can I have your first name?');
    const lastName = prompt('Thanks! How about your last name?');

    const continueQuiz = confirm(`It's nice to meet you ${firstName} ${lastName}. Are you sure that you want to take this quiz?`);
  
    if (!continueQuiz) return;

    const firstQuestion = prompt('Did the movie frighten the president of the United States?');

    if (aYesAnswer(firstQuestion)) correctAnswers++;

    const secondQuestion = prompt('Did the writers write other movies about hackers?');

    if (aYesAnswer(secondQuestion)) correctAnswers++;

    const thirdQuestion = prompt('Was the Professor based on the professor from Gilligans Island?');

    if (!aYesAnswer(thirdQuestion)) correctAnswers++;

    alert(`Noice ${firstName} ${lastName}, once again you have surpassed our expectations.`);

    resultsEl.textContent = `Great job ${firstName} ${lastName} you knew ${correctAnswers} of the answers!`;
});