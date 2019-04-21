// Game.js psuedo coding

// Declare Varibles
var randomNum = $('#randNum');
var totalCount = 0; //TODO Math Array
var wins = 0;
var lose = 0;

// *********************** RNG For the Gems ************************ // 
    var gemOne = $('#one');
    var gemTwo = $('#two');
    var gemThree = $('#three');
    var gemFour = $('#four');


    gemOne = Math.floor(Math.random() * 10 + 2)
    gemTwo = Math.floor(Math.random() * 10 + 2)
    gemThree = Math.floor(Math.random() * 10 + 2)
    gemFour = Math.floor(Math.random() * 10 + 2)


// ************** Random Number Generator To Win **********// 

randomNum = Math.floor(Math.random() * 100) + 1;

console.log('randNum is ' + randomNum)

$('#randNum').append(randomNum);
    


// *********************** Win Lose Logic ************************ // 

$('#wins').text(wins); // adding text to DOM for Wins
$('#lose').text(lose); // adding text to DOM for Losses

function winner(){
    wins++;
    $('#wins').text(wins);
    reset();
}

function losser(){
    lose++;
    $('#lose').text(lose);
    reset();
}

function reset() {
    gemOne = Math.floor(Math.random() * 10 + 2)
    gemTwo = Math.floor(Math.random() * 10 + 2)
    gemThree = Math.floor(Math.random() * 10 + 2)
    gemFour = Math.floor(Math.random() * 10 + 2)
    totalCount = 0;
    $('#userScore').text(totalCount);
}


// *********************** Game Loop ************************ // 

$('#one').on('click', function(){

    totalCount = totalCount + gemOne;

    console.log('New Score ' + totalCount);

        $('#userScore').text(totalCount);

            if(totalCount === randomNum){
                winner();

            } else if (totalCount > randomNum) {
                losser();
            }
});

$('#two').on('click', function(){

    totalCount = totalCount + gemTwo;

    console.log('New Score ' + totalCount);

        $('#userScore').text(totalCount);

            if(totalCount === randomNum){
                winner();

            } else if (totalCount > randomNum) {
                losser();
            }
});

$('#three').on('click', function(){

    totalCount = totalCount + gemThree;

    console.log('New Score ' + totalCount);

        $('#userScore').text(totalCount);

            if(totalCount === randomNum){
                winner();

            } else if (totalCount > randomNum) {
                losser();
            }
});

$('#four').on('click', function(){

    totalCount = totalCount + gemFour;

    console.log('New Score ' + totalCount);

        $('#userScore').text(totalCount);

            if(totalCount === randomNum){
                winner();

            } else if (totalCount > randomNum) {
                losser();
            }
});
