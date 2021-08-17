const buttonEl = document.getElementById('quiz-element');
const resultsEl = document.getElementById('results-element');

import { countsAsAYes } from './utils.js';

buttonEl.addEventListener('click', () => {
    let correctAnswers = 0;

    const firstName = prompt('Hello! Can I have your first name?');

    if (firstName === null) return;

    const lastName = prompt('Thanks! How about your last name?');

    if (lastName === null) return;

    const continueQuiz = confirm(`It's nice to meet you ${firstName} ${lastName}. Are you sure that you want to take this quiz?`);
  
    if (!continueQuiz) return;

    const firstQuestion = prompt('Is Adam the Podfather of podcasting?');

    if (countsAsAYes(firstQuestion)) correctAnswers++;

    const secondQuestion = prompt('Was Adam the first to register the domain MTV.com?');

    if (countsAsAYes(secondQuestion)) correctAnswers++;

    const thirdQuestion = prompt('Is Adam related to a famous FBI agent?');

    if (!countsAsAYes(thirdQuestion)) correctAnswers++;

    alert(`${firstName} ${lastName}, you have surpassed our expectations.`);

    if (correctAnswers < 2) {
        resultsEl.textContent = `It's sad really. ${firstName}, did you even read the page?`;
    }
    else {resultsEl.textContent = `Well, well, well, ${firstName}, you knew ${correctAnswers} of the answers!`;
    }
});

    // a declarative approach would turn this into three readable function, defined elsewhere --- this will get very complicated!
    // askForName(); // declarative functions say "WHAT" to do rahter than HOW to do it
    // askQuestions();
    // showResults();