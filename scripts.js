/*
Youtube parallax effect: https://www.youtube.com/watch?v=UgIwjLg4ONk&ab_channel=Fireship
 */
let gameOne;
let boardWidth = 500;
let boardHeight = 500;
let playerCt;

let playerWidth = 80;
let playerHeight = 10;
let playerVelocityX = 10;

let enemyWidth = 500;
let enemyHeight = 1;

let player = {
    x : boardWidth/2 - playerWidth/2,
    y : boardHeight - playerHeight - 5,
    width : playerWidth,
    height : playerHeight
}

let ballWidth = 10;
let ballHeight = 10;
let ballVelocityX = 3;
let ballVelocityY = 2;

let ball = {
    x : boardWidth/2,
    y : boardHeight/2,
    width : ballWidth,
    height : ballHeight,
    velocityX : ballVelocityX,
    velocityY : ballVelocityY
}

window.onload = () => {
    board = document.getElementById("game-1");
    board.height = boardHeight;
    board.width = boardWidth;
    playerCt = board.getContext("2d");

    playerCt.fillStyle = "purple";
    playerCt.fillRect(player.x, player.y, player.width, player.height);
    requestAnimationFrame(update);

 }

let update = () => {
    requestAnimationFrame(update);
    playerCt.clearRect(0, 0, board.width, board.height);
    playerCt.fillStyle = "purple";
    playerCt.fillRect(player.x, player.y, player.width, player.height);
 }

let movePlayer = (e) => {
    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        let nextPlayerX = player.x - player.velocityX;
        if (!outOfBounds(nextPlayerX)) {
            player.x = nextPlayerX;
        }
    } else if (e.code == "ArrowRight" || e.code == "KeyD") {
        let nextPlayerX = player.x + player.velocityX;
        if (!outOfBounds(nextPlayerX)) {
            player.x = nextPlayerX;
        }
    }
}
 
let outOfBounds = (xPosition) => {
    return (xPosition < 0 || xPosition + playerWidth > boardWidth);
}
