const game = () => {
    let pScore = 0; //プレイヤー側のスコア
    let cScore = 0; //コンピュータ側のスコア

    //Let's playボタンを押したら初期画面がフェードアウトしてゲーム開始画面がフェードイン　→　かずき
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //ゲーム場面　→　かずき
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;
                }, 2000);

                playerHand.getElementsByClassName.animation = "shakePlayer 2s ease";
                computerHand.getElementsByClassName.animation = "shakeComputer 2s ease";
            });
        });

    };

    //スコアを更新　→　みれい
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    //プレイヤーとコンピュータが出した手を比較して判定　→　みれい
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
    };

    startGame();
    playMatch();
}

game();