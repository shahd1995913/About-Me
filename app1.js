function guessfun(){
    let x =prompt('please guess a number between 1 to 10.')

    if (x >6 && x<=10 )
    {
        alert ('too high')
        
    }
elseif(x >=1 && x<=5 )
    {
        alert ('too low')
    }

    if(x=6)
    
    {alert ('Correct number Great')}
 break;
     }

    guessfun()
 
    function guessfun2(){
        let y =prompt('please guess a number between 1 to 10.')
     for (y ; y <= 5 && y >= 1; y++) {
        alert ('too low')
        alert ('please guess a anthor number')}
      for (y ; y > 6 && y <= 10; y++) {
        alert ('too high')
        alert ('please guess a anthor number')}
     if(y=6)
    
     {alert ('Correct number Great')
    break;}

      }
      guessfun2()



      function gussbetweenPlaces() {
        let places = ['london', 'cambodia', 'canada', 'hawaii', 'italy'];
    
        for (let i = 0; i < 9; i++) {
            var userAnsw = prompt('Can you guess my favorite places ? London, Cambodia, Canada, Hawaii, Italy,KSA,UAE,USA,Jordan');
            var guess = userAnsw.toLowerCase();
    
            for (var j = 0; j < places.length; j++){
                if (guess == places[j]) {
                    alert('Congrats you got it right!!!');
                    score++;
                    i = 6;
                    break;
                }
            }
            if (i!=6){
                alert('Sorry wrong answer, try again');
            }
        }
    }

    function gussbetweenPlaces()
    alert('My favorite places are:London, Cambodia, Canada, Hawaii, Italy');
    console.logs('My favorite places are:London, Cambodia, Canada, Hawaii, Italy') 
    alert('The score you got ' + score + ' correct answers!');
    console.logs('The score you got ' + score + ' correct answers!');