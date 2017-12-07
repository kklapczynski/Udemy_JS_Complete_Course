var friend1Height = 160;
var friend1Age = 17;

var friend2Height = 160;
var friend2Age = 17;

var friend3Height = 162;
var friend3Age = 17;

var score1 = friend1Height + 5*friend1Age;
var score2 = friend2Height + 5*friend2Age;
var score3 = friend3Height + 5*friend3Age;

var winner;
var winningScore;

if(score1>score2 && score1>score3) {
    winner = "friend1";
    winningScore = score1;
} else if (score1 === score2 && score1 === score3) {
    winner = "draw";
} else if(score2>score1 && score2>score3) {
    winner = "friend2";
    winningScore = score2;
} else if (score3>score1 && score3>score2) {
    winner = "friend3";
    winningScore = score3;
} else if (score1>score2 && score1 === score3) {
    winner = "friend1 and friend3";
    winningScore = score1;
} else if (score2>score1 && score2 === score3) {
    winner = "friend2 and friend3";
    winningScore = score2;
} else if (score1>score3 && score1 === score2) {
    winner = "friend1 and friend2";
    winningScore = score1;
}



console.log( winner != "draw" ? "The winner is " + winner + " with " +  winningScore + " ponts" : "There is a draw"  );
console.log('It\'s nice today!');