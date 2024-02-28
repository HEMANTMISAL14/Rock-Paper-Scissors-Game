let score = JSON.parse(localStorage.getItem('score'));

        if (score === null) { //(!score) slly to checking is null
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }

        updateScore();

        function playFunction(playerMove) {
            const randomMove = Math.random();
            let computerMove = '';

            if (randomMove >= 0 && randomMove < 1/3) {
                computerMove = 'Rock';
            }
            else if (randomMove >= 1/3 && randomMove < 2/3) {
                computerMove = 'Paper';
            }
            else if (randomMove >= 2/3 && randomMove < 1) {
                computerMove = 'Scissors';
            }

            console.log(computerMove);

            let result = '';

            if (playerMove === computerMove) {
                result = 'Tie!';
            }

            else if (
                (playerMove === 'Rock' && computerMove === 'Paper') ||
                (playerMove === 'Paper' && computerMove === 'Scissors') ||
                (playerMove === 'Scissors' && computerMove === 'Rock')
            ) {
                result = 'You Lose!';
            }

            else {
                result = 'You Win!';
            }

            if (result === 'You Win!') {
                score.wins = score.wins + 1;
            }
            else if (result === 'You Lose!') {
                score.losses = score.losses + 1;
            }
            else if (result === 'Tie!') {
                score.ties = score.ties + 1;
            }

            localStorage.setItem('score', JSON.stringify(score)); 

            updateScore();

            document.querySelector('.js-result').
            innerHTML = result;

            document.querySelector('.js-move').
            innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> 
            <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`
        }

        function updateScore() {
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
        }

        function resertScore() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScore();

            console.log('Score Reset');
        }

        updateScore();