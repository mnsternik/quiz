(function() {

    let currentQuestion = 0; 
    let points = 0; 
    let score; 

    let question = document.getElementById('question'); 
    let checkbox_1 = document.getElementById('checkbox-1'); 
    let checkbox_2 = document.getElementById('checkbox-2'); 
    let checkbox_3 = document.getElementById('checkbox-3'); 
    let checkbox_4 = document.getElementById('checkbox-4'); 
    let answer_1 = document.getElementById('answer-1'); 
    let answer_2 = document.getElementById('answer-2'); 
    let anwser_3 = document.getElementById('answer-3'); 
    let answer_4 = document.getElementById('answer-4');  

    let nextBtn = document.getElementById('next-btn');
    let startBtn = document.getElementById('start-btn');

    let questionQuantityHeader = document.getElementById('question-quantity-header');
    let endMessage = document.getElementById('end-message');

    let startSection = document.getElementById('start-section'); 
    let quizSection = document.getElementById('quiz-section'); 
    let endSection = document.getElementById('end-section'); 

    let lowScoreImg = document.getElementById('low-score'); 
    let middleScoreImg = document.getElementById('middle-score'); 
    let highScoreImg = document.getElementById('high-score'); 
    let perfectScoreImg = document.getElementById('perfect-score'); 

    let checkboxes = [checkbox_1, checkbox_2, checkbox_3, checkbox_4]; 
 
    question.innerHTML = question_1.name; 
    answer_1.innerHTML = question_1.a;
    answer_2.innerHTML = question_1.b;
    anwser_3.innerHTML = question_1.c;
    answer_4.innerHTML = question_1.d;
 
    questionQuantityHeader.innerHTML = `You will answer ${questions.length} questions.`;  
 
    function startQuiz() { 
        startSection.classList.add('disappear'); 
        quizSection.classList.add('appear-block');
    }

    function testAnswer() {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                let checkedChbxClass = checkboxes[i].className;
                let checkedAnswer = document.getElementsByClassName(checkedChbxClass)[1].innerHTML;
                //both paragraph and checkbox have the same class. CheckedChbxClass[1] return paragraph with its inner HTML, 
                //which is then compared to correct answer.
                if (checkedAnswer === questions[currentQuestion].correct) {
                    points ++;
                }
            }
        } 
    }

    function nextQuestion() {
        question.innerHTML = questions[currentQuestion].name; 
        answer_1.innerHTML = questions[currentQuestion].a;
        answer_2.innerHTML = questions[currentQuestion].b;
        anwser_3.innerHTML = questions[currentQuestion].c;
        answer_4.innerHTML = questions[currentQuestion].d;
    }

    function clearCheckboxes() {
        for (let j = 0; j < checkboxes.length; j++) {
            checkboxes[j].checked = false; 
        }
    }

    function showNextQuestion() {
        testAnswer();
        if (currentQuestion === (questions.length -1)) { showEnd() } 
        else { 
            currentQuestion++; 
            clearCheckboxes();
            nextQuestion(); 
        }      
    }
 
    function getPointsPercent() {
        return (points / questions.length) * 100
    }
 
    function getFinalScore() {
        if (getPointsPercent() < 50) { 
            score = `Your score is ${getPointsPercent()}%. Pretty bad!`; 
            lowScoreImg.classList.add('appear-block');
        } else if (getPointsPercent() < 75) { 
            score = `Your score is ${getPointsPercent()}%. Not bad, but could be better!`;
            middleScoreImg.classList.add('appear-block');
        } else if  (getPointsPercent() < 99) { 
            score = `Your score is ${getPointsPercent()}%. Good job!`;
            highScoreImg.classList.add('appear-block');
        }  else { score = `Your score is ${getPointsPercent()}%. Perfect!`;
            perfectScoreImg.classList.add('appear-block'); }  
        endMessage.innerHTML = score;
    }
 
    function showEnd() {
        quizSection.classList.remove('appear-block'); 
        endSection.classList.add('appear-block');
        getFinalScore();
    }

    nextBtn.addEventListener("click", showNextQuestion, false); 
    startBtn.addEventListener("click", startQuiz, false); 

})();
    
