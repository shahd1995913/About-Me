'use strict'
function start(){
    alert ("My name is Shahd Al-Khatib from Irbid. I am 25 years old. I studied computer science at Yarmouk University and graduated at 2017 with a good grade.I trained in the field of programming in Amman andnow I am learning artificial intelligence that depends on machine learningto create smart applications that have the ability to think like humans. My ambition is to join a job that appreciates my skills." )
}

start()


function informationAboutMe1(){
    alert ( "welecom to my page , please chose Yas/No Answer in the following Qustion ??" )
    
    let answer = prompt ("Is my name Shahd?")
    
    if(answer.toLowerCase() == "yas" || answer.toLowerCase() =="y"){alert ("Correct.")
 console.log("Correct.",answer);
}
    
    else if(answer.toLowerCase() == "no" || answer.toLowerCase() == "n"){alert ("Not Correct My name is shahd.")
    console.log("Not Correct My name is shahd.",answer);
}
    else if(answer == "" || answer == null||  answer == '' ){alert ("please chose Yas/No Answer")}
    else {alert ("please chose Yas/No Answer")}
   
}



function informationAboutMe2(){
    alert ( "The second Qustion ? please chose Yas/No Answer in the following Qustion ??" )
    
    let answer1 = prompt ("Did I study computer science?")
    
    if(answer1.toLowerCase() == "yas"|| answer1.toLowerCase() == "y"){alert ("Correct.")
    console.log("Correct.",answer1);
}
    
    else if(answer1.toLowerCase() == "no" || answer1.toLowerCase() == "n"){alert ("Not Correct , I study computer science.")
    console.log("Not Correct , I study computer science.",answer1);
}
    else if(answer1 == "" || answer1 == null||  answer1 == '' ){alert ("please chose Yas/No Answer")}
    else {alert ("please chose Yas/No Answer")}
}



function informationAboutMe3(){
    alert ( "The Thired Qustion ? please chose Yas/No Answer in the following Qustion ??" )
    
    let answer3 = prompt ("Did I graduate in 2017 from university")
    
    if(answer3.toLowerCase() == "yas" || answer3.toLowerCase() == "y"){alert ("Correct.")
    console.log("Correct.",answer3);
}
    
    else if(answer3.toLowerCase() == "no" || answer3.toLowerCase() == "n"){alert ("Not Correct , I graduate in 2017 from university.")
    console.log("Not Correct , I graduate in 2017 from university.",answer3);
}
    else if(answer3 == "" || answer3 == null||  answer3 == '' ){alert ("please chose Yas/No Answer")}
    else {alert ("please chose Yas/No Answer")}
}

function informationAboutMe4(){
    alert ( "The forth Qustion ? please chose Yas/No Answer in the following Qustion ??" )
    
    let answer4 = prompt ("Do I know about artificial intelligence?")
    
    if(answer4.toLowerCase() == "yas" || answer4.toLowerCase() == "y"){alert ("Correct.")
    console.log("Correct.",answer4);
}
    
    else if(answer4.toLowerCase() == "no" || answer4.toLowerCase() == "n"){alert ("Not Correct , I study the  artificial intelligence.")
    console.log("Not Correct , I study the  artificial intelligence.",answer4);
}

    else if(answer4 == "" || answer4 == null||  answer4 == '' ){alert ("please chose Yas/No Answer")}
    else {alert ("please chose Yas/No Answer")}
}



function informationAboutMe5(){
    alert ( "The fiveth Qustion ? please chose Yas/No Answer in the following Qustion ??" )
    
    let answer5 = prompt ("Have I ever trained in programming?")
    
    if(answer5.toLowerCase() == "yas" || answer5.toLowerCase() == "n"){alert ("Correct.")

    console.log("Correct.",answer5);
}
    
    else if(answer5.toLowerCase() == "no" || answer5.toLowerCase() == "n"){alert ("Not Correct , I trained in programming.")
    console.log("Not Correct , I trained in programming.",answer5);
}
    else if(answer5 == "" || answer5 == null||  answer5 == '' ){alert ("please chose Yas/No Answer")}
    else {alert ("please chose Yas/No Answer")}

}


function insertyourname(){
    let username =prompt('Insert youre name please??')
    alert ('Greeting welcoming'+  '  ' + username)
   document.write('Greeting welcoming'+  '  ' + username)
    }
    insertyourname()

    
    informationAboutMe1()
    informationAboutMe2()
    informationAboutMe3()
    informationAboutMe4()
    informationAboutMe5()
  



