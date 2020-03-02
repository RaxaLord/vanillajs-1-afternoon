let score = []

// THIS LINE WILL RESET THE GAME
function restartGame() {
    document.location.href = ''
}

// FUNCTION FOR ENTIRE GAME
function play(clickedId) {
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        score[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        score[clickedId] = 'O'
    }

    console.log(score)

    let topLeft = score[0]
    let topCenter = score[1]
    let topRight = score[2]
    let midLeft = score[3]
    let midCenter = score[4]
    let midRight = score[5]
    let bottomLeft = score[6]
    let bottomCenter = score[7]
    let bottomRight = score[8]

    // FOR HORIZONTAL WINS
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner!`)
        restartGame();
    }
    if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight) {
        alert(`${midLeft} is the winner!`)
        restartGame();
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner!`)
        restartGame();
    }

    // FOR VERTICAL WINS
    if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner!`)
        restartGame();
    }
    if (topCenter !== undefined && topCenter === midCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner!`)
        restartGame();
    }
    if (topRight !== undefined && topRight === midRight && topRight === bottomRight) {
        alert(`${topRight} is the winner!`)
        restartGame();
    }

    // FOR DIAG WINS
    if (topLeft !== undefined && topLeft === midCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner!`)
        restartGame();
    }
    if (topRight !== undefined && topRight === midCenter && topRight === bottomLeft) {
        alert(`${topRight} is the winner!`)
        restartGame();
    }

    // for fullboard
    let boardFull = true

    // loop through and see if all spots are full 
    for (i = 0; i <= 8; i++) {
        if (score[i] === undefined) {
            boardFull = false
        }
    }
    if (boardFull === true) {
        alert(`It was a cats game`)
        restartGame()
    }
}