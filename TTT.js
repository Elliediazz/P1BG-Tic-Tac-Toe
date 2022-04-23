//place for Player 1 and Player 2 to enter their names
    document.getElementById ("playerOne").addEventListener("click", function(){
        let playerOne = window.prompt("PLAYER ONE")
        document.getElementById("outputPlayerOne").innerHTML = playerOne
    })

    document.getElementById ("playerTwo").addEventListener("click", function(){
        let playerTwo = window.prompt("PLAYER ONE")
        document.getElementById("outputPlayerTwo").innerHTML = playerTwo
    })

//randommize which player begins 

//Player 1 chooses "X" or "O"

//if player 1 choosed "X" then player 2 is assigned "O" 
//else player if player 1 chooses "O" then player 2 is assigned "X"

// diplay the players assigned mark next to their name

//the player who chose last, makes the first move

// if player 1 clicks a certain area of the board, their designated mark will appear
let myBoardArray = [
    document.getElementById("board1"),
    document.getElementById("board2"),
    document.getElementById("board3"),
    document.getElementById("board4"),
    document.getElementById("board5"),
    document.getElementById("board6"),
    document.getElementById("board7"),
    document.getElementById("board8"),
    document.getElementById("board9"),
]

function markBoard(){
    alert("hello")
}

for (let i=0; i < myBoardArray.length; i++){
    myBoardArray.addEventListener("click", function(){markBoard();})
}


//turns switch

//if three "o"s or three "x"s connect, display "Player X Wins!"

//if no three marks connect display "Draw"

// add a restart button

