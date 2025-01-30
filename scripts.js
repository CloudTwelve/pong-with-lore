/*
Youtube parallax effect: https://www.youtube.com/watch?v=UgIwjLg4ONk&ab_channel=Fireship
Tutorial for paddle: https://www.youtube.com/watch?v=EmhkLLWAZ8E&ab_channel=KennyYipCoding
*/

let gameOne;
let boardWidth = 500;
let boardHeight = 500;
let context;

window.onload = () => {
    board = document.getElementById("game-1");
    board.height = boardHeight;
    board.width = boardWidth;
}