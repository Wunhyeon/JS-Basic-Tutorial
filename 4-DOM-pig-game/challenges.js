/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row.
 After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100.
(Hint: you can read that value with the .value property in JavaScript. 
    This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, currentScore, currentScore2, activePlayer, gamePlaying, previousDice, goalScore, goalScoreLock;



var init = () =>{
    scores = [0,0];
    currentScore = 0;
    currentScore2 = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');

    goalScoreLock = true;

    document.querySelector('.goalScore').removeAttribute('readOnly');
    document.querySelector('.goalScore').value = '';
    document.querySelector('.goalScore').style.backgroundColor = '';
}

var nextPlayer = () => {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    currentScore = 0;
    currentScore2 = 0;
    document.querySelector('#current-' + activePlayer).textContent = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    activePlayer = activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    previousDice = 0;
}


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //var dice = 6;
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        if(!document.querySelector('.goalScore').value){

            goalScore = 100;

            document.querySelector('.goalScore').value = goalScore;
            document.querySelector('.goalScore').setAttribute("readOnly","true");
            document.querySelector('.goalScore').style.backgroundColor = 'lightgray';
        }else{
            goalScore = document.querySelector('.goalScore').value;
            document.querySelector('.goalScore').setAttribute("readOnly","true");
            document.querySelector('.goalScore').style.backgroundColor = 'lightgray';
        }
        
        if(dice !== 1&& dice2 !== 1){
            //if(previousDice !== 6 || dice !== previousDice){
                diceDOM.style.display = 'block';
                diceDOM.src = 'dice-'+dice+'.png';
                currentScore += dice;
                //document.querySelector('#current-' + activePlayer).textContent = currentScore;
                //previousDice = dice;
                diceDOM2.style.display = 'block';
                diceDOM2.src = 'dice-'+dice2+'.png';
                currentScore2 += dice2;
                document.querySelector('#current-' + activePlayer).textContent = currentScore+currentScore2;
            //}else{
              //  nextPlayer();
            //}  
        }else{
            nextPlayer();
        }
    }
})


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += currentScore + currentScore2;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer]>=goalScore){
            document.getElementById('name-'+activePlayer).textContent = 'Winner!';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    } 
})

document.querySelector('.btn-new').addEventListener('click',init);

init();