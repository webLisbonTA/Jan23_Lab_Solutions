/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const startButton = document.getElementById("start-button");

//Creating the player
const player = new Component(220, 550, 50, 100, "Image", ctx);

startButton.onclick = function () {
  const game = new Game(ctx, 500, 700, player);
  game.start();
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      if (player.x > 70) {
        player.speedX -= 2;
      }
      break;
    case "ArrowRight":
      if (player.x + player.w < 430) {
        player.speedX += 2;
      }
      break;
  }
});

document.addEventListener("keyup", () => {
  player.speedX = 0;
  player.speedY = 0;
});
