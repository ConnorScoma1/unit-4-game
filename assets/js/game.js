// Game.js psuedo coding

// Declare Varibles
var randomNum = $('#randNum');
var totalCount = []; //TODO Math Array
    
randomNum = Math.floor(Math.random() * 100) + 1;

console.log('randNum is ' + randomNum)

$('#randNum').append(randomNum);
    


// for loop for win/ lose counter

//random number generator gems

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


//if user score is equal to computer score 
    //user recives a win

    //else if user score is > computer score
        //user will recive a loss
    