// Game.js psuedo coding

// Declare Varibles
var randomNum = $('#randNum');
var totalCount = 0; //TODO Math Array
var wins = 0;
var lose = 0;


// ************** Random Number Generator To Win **********// 

randomNum = Math.floor(Math.random() * 100) + 1;

console.log('randNum is ' + randomNum)

$('#randNum').append(randomNum);
    


// *********************** Function for Win Lose Logic ************************ // 
function winLose() {
    if(totalCount === randomNum) {

        for(var i = 0; i < 10; i++){ //if user score is equal to computer score 
            console.log('You Win!') //user recives a win 
            wins++;
        }

    } else if(totalCount > randomNum) {  //else if user score is > computer score
        console.log('You Lose!')  //user will recive a loss
        lose++;
    }
}

// *********************** RNG For the Gems ************************ // 
var gemOne = $('#one');
var gemTwo = $('#two');
var gemThree = $('#three');
var gemFour = $('#four');


    gemOne = Math.floor(Math.random() * 10 + 1)
    gemTwo = Math.floor(Math.random() * 10 + 1)
    gemThree = Math.floor(Math.random() * 10 + 1)
    gemFour = Math.floor(Math.random() * 10 + 1)

    console.log('Gem One is ' + gemOne);
    console.log('Gem Two is ' + gemTwo);
    console.log('Gem Three is ' + gemThree);
    console.log('Gem Four is ' + gemFour);


// *********************** The Game Loop ************************ // 


    $('gemOne').click(function(){
       gemOne += totalCount;
    });

    $('gemTwo').click(function(){
        gemTwo += totalCount;
     });

     $('gemThree').click(function(){
        gemThree += totalCount;
     });

     $('gemFour').click(function(){
        gemFour += totalCount;
     });

     
