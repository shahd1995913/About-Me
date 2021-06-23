'use strict'
function start() {
    alert("My name is Shahd Al-Khatib from Irbid. I am 25 years old. I studied computer science at Yarmouk University and graduated at 2017 with a good grade.I trained in the field of programming in Amman andnow I am learning artificial intelligence that depends on machine learningto create smart applications that have the ability to think like humans. My ambition is to join a job that appreciates my skills.")
}

start()


function infoAboutMe1() {
    alert("welecom to my page , please chose Yas/No Answer in the following Qustion ??")

    let answer = prompt("Is my name Shahd?")

    if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
        alert("Correct.")
        console.log("Correct.", answer);
    }

    else if (answer.toLowerCase() == "no" || answer.toLowerCase() == "n") {
        alert("Not Correct My name is shahd.")
        console.log("Not Correct My name is shahd.", answer);
    }
    else if (answer == "" || answer == null || answer == '') { alert("please chose Yes/No Answer") }
    else { alert("please chose Yas/No Answer") }

}



function infoAboutMe2() {
    alert("The second Qustion ? please chose Yas/No Answer in the following Qustion ??")

    let answer1 = prompt("Did I study computer science?")

    if (answer1.toLowerCase() == "yes" || answer1.toLowerCase() == "y") {
        alert("Correct.")
        console.log("Correct.", answer1);
    }

    else if (answer1.toLowerCase() == "no" || answer1.toLowerCase() == "n") {
        alert("Not Correct , I study computer science.")
        console.log("Not Correct , I study computer science.", answer1);
    }
    else if (answer1 == "" || answer1 == null || answer1 == '') { alert("please chose Yes/No Answer") }
    else { alert("please chose Yes/No Answer") }
}



function infoAboutMe3() {
    alert("The Thired Qustion ? please chose Yas/No Answer in the following Qustion ??")

    let answer3 = prompt("Did I graduate in 2017 from university")

    if (answer3.toLowerCase() == "yes" || answer3.toLowerCase() == "y") {
        alert("Correct.")
        console.log("Correct.", answer3);
    }

    else if (answer3.toLowerCase() == "no" || answer3.toLowerCase() == "n") {
        alert("Not Correct , I graduate in 2017 from university.")
        console.log("Not Correct , I graduate in 2017 from university.", answer3);
    }
    else if (answer3 == "" || answer3 == null || answer3 == '') { alert("please chose Yes/No Answer") }
    else { alert("please chose Yes/No Answer") }
}

function infoAboutMe4() {
    alert("The forth Qustion ? please chose Yes/No Answer in the following Qustion ??")

    let answer4 = prompt("Do I know about artificial intelligence?")

    if (answer4.toLowerCase() == "yes" || answer4.toLowerCase() == "y") {
        alert("Correct.")
        console.log("Correct.", answer4);
    }

    else if (answer4.toLowerCase() == "no" || answer4.toLowerCase() == "n") {
        alert("Not Correct , I study the  artificial intelligence.")
        console.log("Not Correct , I study the  artificial intelligence.", answer4);
    }

    else if (answer4 == "" || answer4 == null || answer4 == '') { alert("please chose Yes/No Answer") }
    else { alert("please chose Yes/No Answer") }
}



function infoAboutMe5() {
    alert("The fiveth Qustion ? please chose Yes/No Answer in the following Qustion ??")

    let answer5 = prompt("Have I ever trained in programming?")

    if (answer5.toLowerCase() == "yes" || answer5.toLowerCase() == "y") {
        alert("Correct.")

        console.log("Correct.", answer5);
    }

    else if (answer5.toLowerCase() == "no" || answer5.toLowerCase() == "n") {
        alert("Not Correct , I trained in programming.")
        console.log("Not Correct , I trained in programming.", answer5);
    }
    else if (answer5 == "" || answer5 == null || answer5 == '') { alert("please chose Yas/No Answer") }
    else { alert("please chose Yes/No Answer") }

}


function insertyourname() {
    let username = prompt('Insert youre name please??')
    alert('Greeting welcoming' + '  ' + username)
    document.write('Greeting welcoming' + '  ' + username)
}








// function guessfun() {
//     let x =prompt('please guess a number between 1 to 10.')
//     if (x >6 && x<=10 )
//     {
//         alert ('too high')

//     }
// else if (x >= 1 && x<= 5 )
//     {
//         alert ('too low')
//     }

//     if(x==6) {alert ('Correct number Great');}

//      }

//     guessfun()



function guessnumber() {
    var c = 1;
    while (c < 5 && num !== 6) {
        var num = parseInt(prompt('Guess my favorite number'));
        if (num > 6) {
            alert('You guessed too high! Guess again');
            c++;
        } else if (num < 6) {
            alert('You guessed too low! Guess again');
            c++;
        }
    }
    if (num === 6) {
        alert('That is correct! My favorite number is 6!');
        c = 5;
    }
    alert('That is correct! My favorite number is 6!');

}


















// function guessfun2(){


//     let y =prompt('please guess a number between 1 to 10.')

//     for (i=1; i <= 10; i++)

//     {

//         if (i >6 && x<=10 )

//         {

//             alert ('too high')

//             y =prompt('please guess a number between 1 to 10.')

//         }

//         else if (i >= 1 && i <= 5 )

//         {

//             alert ('too low')

//             y =prompt('please guess a number between 1 to 10.')

//         }

//         else if(i===6 || y== 6)
//         {alert ('Correct number Great')}

//     }

//     y =prompt('please guess a number between 1 to 10.')

// }

// guessfun2()



var score = 0;
function gussbetweenPlaces() {

    let places = ['london', 'cambodia', 'canada', 'hawaii', 'italy'];


    for (let v = 0; v < 6; v++) {

        let userAnsw = prompt('Can you guess my favorite places ? London, Cambodia, Canada, Hawaii, Italy,KSA,UAE,USA,Jordan');

        let guess = userAnsw.toLowerCase();


        for (var j = 0; j < places.length; j++) {

            if (guess == places[j]) {

                alert('Congrats you got it right!!!');

                score++;

                v = 6;


                break;

            }

        }

        if (v != 6) {

            alert('Sorry wrong answer, try again');

        }

    }


}




function Scoreforuser() {

    alert('My favorite places are:London, Cambodia, Canada, Hawaii, Italy');
    alert('The score you got = ' + score + ' correct answers!');
    document.write('</br> The score you got = ' + score + ' correct answers!')

    console.logs("My favorite places are:London, Cambodia, Canada, Hawaii, Italy", userAnsw);

    console.logs(" The score you got ", score);

}




infoAboutMe1()
infoAboutMe2()
infoAboutMe3()
infoAboutMe4()
infoAboutMe5()
insertyourname()
guessnumber()
gussbetweenPlaces()
Scoreforuser()
