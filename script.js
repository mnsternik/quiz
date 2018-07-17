const questions = [
    q1 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: 'Lorem ipsum dolor sit amet, consectetur' ,
        b: 'Lorem ipsum dolor sit amet, consectetur',
        c: 'Lorem ipsum dolor sit amet, consectetur',
        d: 'Lorem ipsum dolor sit amet, consectetur',
        correct: 'Lorem ipsum dolor sit amet, consectetur'
    },

    q2 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: 'Lorem ipsum dolor sit amet, consectetur',
        b: 'Lorem ipsum dolor sit amet, consectetur',
        c: 'Lorem ipsum dolor sit amet, consectetur',
        d: 'Lorem ipsum dolor sit amet, consectetur',
        correct: 'Lorem ipsum dolor sit amet, consectetur'
    },

    q3 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: 'Lorem ipsum dolor sit amet, consectetur',
        b: 'Lorem ipsum dolor sit amet, consectetur', 
        c: 'Lorem ipsum dolor sit amet, consectetur',
        d: 'DLorem ipsum dolor sit amet, consectetur',
        correct: 'Lorem ipsum dolor sit amet, consectetur'
    },

    q4 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: 'Lorem ipsum dolor sit amet, consectetur', 
        b: 'Lorem ipsum dolor sit amet, consectetur', 
        c: 'Lorem ipsum dolor sit amet, consectetur', 
        d: 'Lorem ipsum dolor sit amet, consectetur',
        correct: 'Lorem ipsum dolor sit amet, consectetur'
    },

    q5 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: 'Lorem ipsum dolor sit amet, consectetur',
        b: '4Lorem ipsum dolor sit amet, consectetur',
        c: 'Lorem ipsum dolor sit amet, consectetur',
        d: 'Lorem ipsum dolor sit amet, consectetur',
        correct: 'Lorem ipsum dolor sit amet, consectetur'
    },

    q6 = {
        name: 'Lorem ipsum dolor sit amet, consectetur?',
        a: 'Lorem ipsum dolor sit amet, consectetur',
        b: 'Lorem ipsum dolor sit amet, consectetur',
        c: 'Lorem ipsum dolor sit amet, consectetur',
        d: 'Lorem ipsum dolor sit amet, consectetur',
        correct: 'Lorem ipsum dolor sit amet, consectetur'
    },

    q7 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: 'Lorem ipsum dolor sit amet, consectetur',
        b: 'Lorem ipsum dolor sit amet, consectetur',
        c: 'Lorem ipsum dolor sit amet, consectetur', 
        d: 'Lorem ipsum dolor sit amet, consectetur', 
        correct: 'Lorem ipsum dolor sit amet, consectetur'
    },

    q8 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: '75%',
        b: '80%',
        c: '85%',
        d: '90%',
        correct: '80%'
    },

    q9 = {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        a: '19:00',
        b: '19:10',
        c: '19:30',
        d: '20:30',
        correct: '19:10'
    },

    q10 = {
        name: 'Lorem ipsum dolor sit amet, consectetur?',
        a: 'Lorem ipsum dolor sit amet, consectetur',
        b: 'Lorem ipsum dolor sit amet, consectetur',
        c: 'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturH',
        d: 'Lorem ipsum dolor sit amet, consectetur',
        correct: 'Lorem ipsum dolor sit amet, consectetur'
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
   let welh2 = document.getElementById('welh2');

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
                //both parapgrahp and checkbox has the same class. CheckedChbxClass[1] return paragraph with its inner HTML, which is then compared with correct answers.
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

    let finalScore = function() {
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

    let makeEnd = function() {
        $('.quiz').css('display', 'none'); 
        $('.end').css('display', 'flex');
        finalScore();
        $('.end').addClass('endDone');
    }

    $('#btn').click(function() {
        testAnswer();
        console.log(current);
        if (current == 9 ) { makeEnd() } 
        else { 
            current++; 
            clearCheckboxes();
            nextQuestion(); 
        }      
    })

    $('#start').click(function(){
        $('.welcome').addClass('disappear'); 
        $('.quiz').addClass('appear');
    })
})
