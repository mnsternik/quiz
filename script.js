(function() {
    const questions = [
        question_1 = {
            name: 'What would be output of this code: console.log(typeof("0"))?',
            a: 'Number' ,
            b: 'String',
            c: 'False',
            d: 'Boolean',
            correct: 'String'
        },
    
        question_2 = {
            name: 'Which keyword cannot be used to declare a variable?',
            a: 'Var',
            b: 'Let',
            c: 'Function',
            d: 'Const',
            correct: 'Function'
        },
    
        question_3 = {
            name: 'What would be output of this code: console.log(1 === "1")?',
            a: 'true',
            b: 'false', 
            c: 'undefined',
            d: 'Error',
            correct: 'false'
        },
    
        question_4 = {
            name: 'What does method Array.prototype.push()?',
            a: 'Adds new item to the end of array', 
            b: 'Removes last item of array', 
            c: 'Adss new item at the zeroeth index of array', 
            d: 'Removes item at the zeroeth index of array',
            correct: 'Adds new item to the end of array'
        },
    
        question_5 = {
            name: 'What would be output of this code: console.log(!false && (false || true));?',
            a: 'false',
            b: 'undefined',
            c: 'true',
            d: 'Error',
            correct: 'true'
        },
    
        question_6 = {
            name: 'Which of the following is not a valid JavaScript variable name?',
            a: '_myVar',
            b: '2myVar',
            c: 'my-var',
            d: 'None of the above',
            correct: '2myVar'
        },
    
        question_7 = {
            name: 'What is corret way co check the legnth of a variable myVar?',
            a: 'myVar.length()',
            b: 'myVar.len()',
            c: 'myVar.length', 
            d: 'myVar.len', 
            correct: 'myVar.length'
        },
    
        question_8 = {
            name: 'How many iterations this loop will have: for (let i = 3; i < 12; i += 3)',
            a: '3',
            b: '4',
            c: 'infinity',
            d: '0',
            correct: '3'
        },
    
        question_9 = {
            name: 'Inside which HTML element do we put the JavaScript?',
            a: 'javascript tag',
            b: 'js tag',
            c: 'script tag',
            d: 'source tag',
            correct: 'script tag'
        },
    
        question_10 = {
            name: 'How can you add a comment in a JavaScript?',
            a: '//this is comment',
            b: '<--this is comment -->',
            c: '#this is comment',
            d: '*/this is comment /*',
            correct: '//this is comment'
        },
    ];
    
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
    
