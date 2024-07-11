const questions = document.querySelectorAll('.all-questions');

questions.forEach(question => {
  const questionHeader = question.querySelector('.question-header')
  
  const toggleAnswer = () => {
    const answer = question.querySelector('.answers');
    const plusMinus = question.querySelector('.plus-minus');
    if (answer.hasAttribute('hidden')) {
      answer.removeAttribute('hidden');
      plusMinus.src = './images/icon-minus.svg';
    } else {
      answer.setAttribute('hidden', '');
      plusMinus.src = './images/icon-plus.svg';
    }
  };

  questionHeader.addEventListener('click', toggleAnswer);
  questionHeader.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') toggleAnswer();
  });
});