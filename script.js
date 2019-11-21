(function() {
    const questions = [
        question_1 = {
            name: 'Zasoby, które musza być zamapowane do wystawienia sesji HP to:',
            a: 'F, I, S' ,
            b: 'F, I, R',
            c: 'F, I',
            d: 'F, I, K',
            correct: 'F, I'
        },
    
        question_2 = {
            name: 'W przypadku niezgodności lub braku danych w zleceniu na nadanie uprawnień, do kogo zlecenie jest odsyłane z prośba o uzupełnienie:',
            a: 'Dział Uprawnień',
            b: 'Dział Bezpieczeństwa',
            c: 'Helpdesk',
            d: 'Do osoby zlecającej',
            correct: 'Dział Bezpieczeństwa'
        },
    
        question_3 = {
            name: 'Podczas realizowania zlecenia z ofertowaniem, które z grup mogą być stworzone w jednym pliku:',
            a: 'PP i PPA4',
            b: 'PP i Standard', 
            c: 'PPA4 i Standard',
            d: 'Dla każdej grupy musi być osobny plik',
            correct: 'PP i Standard'
        },
    
        question_4 = {
            name: 'Jakimi poświadczeniami logujemy się na serwer WROP3APP24?',
            a: 'Domeny PL', 
            b: 'Domeny AIGPRDAS', 
            c: 'Domeny AIGCRBG', 
            d: 'Loginem i hasłem dla starych aplikacji',
            correct: 'Domeny AIGCRBG'
        },
    
        question_5 = {
            name: 'Jaka jest godzina graniczna startu I Sprawozdawczości, po przekroczeniu której należy zgłosić opóźnienie w ICBSsie?',
            a: '6:00',
            b: '4:30',
            c: '5:30',
            d: '5:45',
            correct: '5:45'
        },
    
        question_6 = {
            name: 'Na jakim serwerze znajduje się baza Squestion-L_CRU?',
            a: 'wrop2squestion-l65',
            b: 'wrop2squestion-l63',
            c: 'wrop2squestion-l75',
            d: 'wrop2squestion-l73',
            correct: 'wrop2squestion-l73'
        },
    
        question_7 = {
            name: 'Które z wymienionych alarmów w aplikacji DataPumpMonitor należy zgłosić na HelpDesk?',
            a: 'Uruchomienie CL',
            b: 'Wiadomość E-mail',
            c: 'Autoryzacja kart', 
            d: 'Transakcja analityczna', 
            correct: 'Uruchomienie CL'
        },
    
        question_8 = {
            name: 'Jaka jest wartość procentowa zajętości systemu ASP, po przekroczeniu której należy ja zgłosić  Administratorom AS400?',
            a: '75%',
            b: '80%',
            c: '85%',
            d: '90%',
            correct: '80%'
        },
    
        question_9 = {
            name: 'O której godzinie zaczytywanie jest zapytanie pakietowe BIK?',
            a: '19:00',
            b: '19:10',
            c: '19:30',
            d: '20:30',
            correct: '19:10'
        },
    
        question_10 = {
            name: 'W jakim podsystemie w ICBSie widzimy zalogowanych użytkowników?',
            a: 'question-INTER',
            b: 'question-Mquestion-M',
            c: 'question-BATCH',
            d: 'question-USERS',
            correct: 'question-INTER'
        },
    ];
    
    let currentQuestion = 0; 
    let points = 0; 

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

    let checkboxes = [checkbox_1, checkbox_2, checkbox_3, checkbox_4]; 
 
    question.innerHTML = question_1.name; 
    answer_1.innerHTML = question_1.a;
    answer_2.innerHTML = question_1.b;
    anwser_3.innerHTML = question_1.c;
    answer_4.innerHTML = question_1.d;
 
    questionQuantityHeader.innerHTML = `Zaraz odpowiesz na ${questions.length} pytań`;  
 
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
        if (currentQuestion == 9) { showEnd() } 
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
        if (getPointsPercent() < 50) { endPoints = `Twój wynik to ${getPointsPercent()}%. Popraw się!`; }
        else if (getPointsPercent() < 75) { endPoints = `Twój wynik to ${getPointsPercent()}%. Całkiem nieźle, ale może być lepiej!`; }
        else if  (getPointsPercent() < 99) { endPoints = `Twój wynik to ${getPointsPercent()}%. Jest dobrze!`; }  
        else { endPoints = `Twój wynik to ${getPointsPercent()}%. Perfekcyjnie!`; }  
        endMessage.innerHTML = endPoints;
    }
 
    function showEnd() {
        quizSection.classList.remove('appear-block'); 
        endSection.classList.add('appear-block');
        getFinalScore();
    }

    nextBtn.addEventListener("click", showNextQuestion, false); 
    startBtn.addEventListener("click", startQuiz, false); 

})();
    
