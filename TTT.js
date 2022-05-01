let turn = 'X';
 
//created an array for me for which i can use to loop over when clicked
// if player 1 clicks a certain area of the board, their designated mark will appear
const boards = document.querySelectorAll('.board')

    //Keep track of the marks on board
    let boardMark = Array(boards.length);
    boardMark.fill(null); 

    boards.forEach(board => {
        board.addEventListener('click', function(event){
            //write a function to make  'X'/'O' appear and switch turns
            //console.log('POW!!!')
            let board= event.target;
            let boardNumber = board.dataset.index; // **research** data index allows us to store extra information w/o extra properties in DOM (mdn)
                if (board.innerHTML != '')
                return;

            // updated conditional to check status of div
            if (turn === 'X'){
                if(board.innerHTML== ''){
                    board.innerHTML= 'X';
                    boardMark[boardNumber]='X';
                    turn = 'O';
                }else {
                    window.alert('Please select a different square.');
                }
            }else {
                if(board.innerHTML== ''){
                    board.innerHTML='O';
                    boardMark[boardNumber]='O';
                    turn = 'X';
                }else {
                    window.alert('Please select a different square.');
                }
            }
            checkWinner()
        })

        // give functionality to restart button
        let reset = document.getElementById('restartBtn');
            reset.addEventListener('click', function(){
                //Write a function to clear the board
                //console.log('Game Over:(');
                boardMark.fill(null);
                board.innerHTML= null;
                turn = 'X';
            })
   
    }) 

//if three "o"s or three "x"s connect, display "Winner!"
function checkWinner() {
    //check for a winner
    const boardValue0 = boardMark[0];
    const boardValue1 = boardMark[1];
    const boardValue2 = boardMark[2];

    const boardValue3 = boardMark[3];
    const boardValue4 = boardMark[4];
    const boardValue5 = boardMark[5];

    const boardValue6 = boardMark[6];
    const boardValue7 = boardMark[7];
    const boardValue8 = boardMark[8];

    console.log(boardMark)
    if (
        boardValue0 != null && 
        boardValue0 === boardValue1 && 
        boardValue0 === boardValue2
        ){
        window.alert('winner!');
        return;
    }

    if (
        boardValue3 != null && 
        boardValue3 === boardValue4 && 
        boardValue3 === boardValue5
        ){
        window.alert('winner!');
        return;
    }

    if (
        boardValue6 != null && 
        boardValue6 === boardValue7 && 
        boardValue6 === boardValue8
        ){
        window.alert('winner!');
        return;
    }

    if (
        boardValue0 != null && 
        boardValue0 === boardValue3 && 
        boardValue0 === boardValue6
        ){
        window.alert('winner!');
        return;
    }

    if (
        boardValue1 != null && 
        boardValue1 === boardValue4 && 
        boardValue1 === boardValue7
        ){
        window.alert('winner!');
        return;
    }

    if (
        boardValue2 != null && 
        boardValue2 === boardValue5 && 
        boardValue2 === boardValue8
        ){
        window.alert('winner!');
        return;
    }

    if (
        boardValue0 != null && 
        boardValue0 === boardValue4 && 
        boardValue0 === boardValue8
        ){
        window.alert('winner!');
        return;
    }

    if (
        boardValue2 != null && 
        boardValue2 === boardValue4 && 
        boardValue2 === boardValue6
        ) {
        window.alert('winner!');
        return;
    }
    
    
    //check if there is a draw
    // every() tests if all elemets in array pass the function (returns a boolean)
    let boardFilled = boardMark.every((board) => board != null)
        if (boardFilled){
            window.alert ('draw')
        }
}

