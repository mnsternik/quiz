const questions = [
    q1 = {
        name: 'Zasoby, które musza być zamapowane do wystawienia sesji HP to:',
        a: 'F, I, S' ,
        b: 'F, I, R',
        c: 'F, I',
        d: 'F, I, K',
        correct: 'F, I'
    },

    q2 = {
        name: 'W przypadku niezgodności lub braku danych w zleceniu na nadanie uprawnień, do kogo zlecenie jest odsyłane z prośba o uzupełnienie:',
        a: 'Dział Uprawnień',
        b: 'Dział Bezpieczeństwa',
        c: 'Helpdesk',
        d: 'Do osoby zlecającej',
        correct: 'Dział Bezpieczeństwa'
    },

    q3 = {
        name: 'Podczas realizowania zlecenia z ofertowaniem, które z grup mogą być stworzone w jednym pliku:',
        a: 'PP i PPA4',
        b: 'PP i Standard', 
        c: 'PPA4 i Standard',
        d: 'Dla każdej grupy musi być osobny plik',
        correct: 'PP i Standard'
    },

    q4 = {
        name: 'Jakimi poświadczeniami logujemy się na serwer WROP3APP24?',
        a: 'Domeny PL', 
        b: 'Domeny AIGPRDAS', 
        c: 'Domeny AIGCRBG', 
        d: 'Loginem i hasłem dla starych aplikacji',
        correct: 'Domeny AIGCRBG'
    },

    q5 = {
        name: 'Jaka jest godzina graniczna startu I Sprawozdawczości, po przekroczeniu której należy zgłosić opóźnienie w ICBSsie?',
        a: '6:00',
        b: '4:30',
        c: '5:30',
        d: '5:45',
        correct: '5:45'
    },

    q6 = {
        name: 'Na jakim serwerze znajduje się baza SQL_CRU?',
        a: 'wrop2sql65',
        b: 'wrop2sql63',
        c: 'wrop2sql75',
        d: 'wrop2sql73',
        correct: 'wrop2sql73'
    },

    q7 = {
        name: 'Które z wymienionych alarmów w aplikacji DataPumpMonitor należy zgłosić na HelpDesk?',
        a: 'Uruchomienie CL',
        b: 'Wiadomość E-mail',
        c: 'Autoryzacja kart', 
        d: 'Transakcja analityczna', 
        correct: 'Uruchomienie CL'
    },

    q8 = {
        name: 'Jaka jest wartość procentowa zajętości systemu ASP, po przekroczeniu której należy ja zgłosić  Administratorom AS400?',
        a: '75%',
        b: '80%',
        c: '85%',
        d: '90%',
        correct: '80%'
    },

    q9 = {
        name: 'O której godzinie zaczytywanie jest zapytanie pakietowe BIK?',
        a: '19:00',
        b: '19:10',
        c: '19:30',
        d: '20:30',
        correct: '19:10'
    },

    q10 = {
        name: 'W jakim podsystemie w ICBSie widzimy zalogowanych użytkowników?',
        a: 'QINTER',
        b: 'QMQM',
        c: 'QBATCH',
        d: 'QUSERS',
        correct: 'QINTER'
    },
];

$(document).ready(function(){
    
   let current = 0; 
   let points = 0; 
   let qname = document.getElementById('q-name'); 
   let chbx1 = document.getElementById('chbx1'); 
   let chbx2 = document.getElementById('chbx2'); 
   let chbx3 = document.getElementById('chbx3'); 
   let chbx4 = document.getElementById('chbx4'); 
   let p1 = document.getElementById('p1'); 
   let p2 = document.getElementById('p2'); 
   let p3 = document.getElementById('p3'); 
   let p4 = document.getElementById('p4');  
   let welh2 = document.getElementById('welcome-h2');

   let anwsers = [p1, p2, p3, p4]; 
   let chbxs = [chbx1, chbx2, chbx3, chbx4]; 

   qname.innerHTML = q1.name; 
   p1.innerHTML = q1.a;
   p2.innerHTML = q1.b;
   p3.innerHTML = q1.c;
   p4.innerHTML = q1.d;

   welh2.innerHTML = `Zaraz odpowiesz na ${questions.length} pytań`;  

   let testAnswer = function() {
       for (let i = 0; i < chbxs.length; i++) {
            if (chbxs[i].checked) {
                let checkedChbxClass = chbxs[i].className;
                let checkedAnswer = document.getElementsByClassName(checkedChbxClass)[1].innerHTML;
                //both parapgrahp and checkbox has the same class. CheckedChbxClass[1] return paragraph with its inner HTML, which is then compared to correct answer.
                if (checkedAnswer === questions[current].correct) {
                    points ++;
                }
            }
        } 
    }

    let nextQuestion = function() {
        qname.innerHTML = questions[current].name; 
        p1.innerHTML = questions[current].a;
        p2.innerHTML = questions[current].b;
        p3.innerHTML = questions[current].c;
        p4.innerHTML = questions[current].d;
    }

    let clearCheckboxes = function() {
        for (let j = 0; j < chbxs.length; j++) {
            chbxs[j].checked = false; 
        }
    }

    let getPointsPercent = function() {
        return (points / questions.length) * 100
    }

    let getFinalScore = function() {
        let endMessage = document.getElementById('end-message');
        if (getPointsPercent() < 50) {
            endPoints = `Twój wynik to ${getPointsPercent()}%. Popraw się!`;
            $('#low-points').css('display', 'block');
        } else if (getPointsPercent() < 75) {
            endPoints = `Twój wynik to ${getPointsPercent()}%. Jest nienajgorzej.`;
            $('#middle-points').css('display', 'block');
        } else if (getPointsPercent() < 99) {
            endPoints = `Twój wynik to ${getPointsPercent()}%. Brawo!`;
            $('#high-points').css('display', 'block');
        } else if (getPointsPercent() === 100) {
            endPoints = `Twój wynik to ${getPointsPercent()}%. Czapki z głów!`;
            $('#perfect-points').css('display', 'block');
        }
        endMessage.innerHTML = endPoints;
    }

    let displayEnd = function() {
        $('.quiz').css('display', 'none'); 
        $('.end').css('display', 'flex');
        getFinalScore();
        $('.end').addClass('endDone');
    }

    $('#start').click(function(){
        $('.welcome').addClass('disappear'); 
        $('.quiz').addClass('appear');
    })

    $('#next-step').click(function() {
        testAnswer();
        console.log(current);
        if (current == 9 ) { displayEnd() } 
        else { 
            current++; 
            clearCheckboxes();
            nextQuestion(); 
        }      
    })
})
