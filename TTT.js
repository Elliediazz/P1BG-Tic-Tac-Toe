// if player 1 clicks a certain area of the board, their designated mark will appear
//defining variables
let turn = 'X';
let winner = null;
 
//created an array for me for which i can use to loop over when clicked
let boards = document.querySelectorAll('.board').forEach(board => {
    board.addEventListener('click', function(){
        //write a function to make  'X'/'O' appear and switch turns
        //console.log('hi')
        if (turn === 'X'){
            board.innerHTML='X';
            turn = 'O'
        } else {
            board.innerHTML='O';
            turn = 'X'
        }
    })

    // give functionality to restart button
    let reset = document.getElementById('restartBtn');
        reset.addEventListener('click', function(){
        //Write a function to reset the board
        //console.log('hello world');
        board.innerHTML= "";
        turn = 'X'
        winner = null;
    })

}) 
//if three "o"s or three "x"s connect, display "Player X/O Wins!"

//if no three marks connect display "Draw"
