import newGame from "./game/game";

const CELLS_COUNT = 16;

document.addEventListener("DOMContentLoaded", () => {
  const cells = [...document.querySelectorAll(".cell")];
  const gameField = document.querySelector('.grid_container');

  const newField = new newGame(cells, gameField);
  newField.initGame(CELLS_COUNT);

  // eslint-disable-next-line no-unused-vars
  const gameInterval = setInterval(() => {
    newField.checkGame(gameInterval, CELLS_COUNT);
  }, 1000);
});
