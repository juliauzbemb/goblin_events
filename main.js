/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game/game.js
class newGame {
  constructor(cells, gameField) {
    this._cells = cells;
    this.gameField = gameField;
    this._count = 0;
    this.max_points = 10;
    this._points = 0;
    this.onCellClick = this.onCellClick.bind(this);
    this.gameField.addEventListener('click', this.onCellClick);
  }
  get cells() {
    return this._cells;
  }
  get count() {
    return this._count;
  }
  set count(val) {
    this._count = val;
  }
  get points() {
    return this._points;
  }
  set points(val) {
    this._points = val;
  }
  initGame(number) {
    let cellActiveNumber = this.generateRandomNumber(number);
    const cellTarget = this.cells[cellActiveNumber - 1];
    cellTarget.classList.add("active");
    this.count = 1;
  }
  deactivateCell() {
    let cellActive = this.cells.find(el => el.classList.contains("active"));
    if (cellActive) {
      cellActive.classList.remove("active");
    }
  }
  activateRandom(number) {
    const cellTarget = this.cells[number - 1];
    this.deactivateCell();
    cellTarget.classList.add("active");
    this.count = this.count + 1;
  }
  checkGame(interval, number) {
    if (this.points === this.max_points) {
      alert('вы выиграли');
      clearInterval(interval);
    } else if (this.count === 5) {
      alert('вы проиграли');
      clearInterval(interval);
      this.deactivateCell();
    } else if (this.count < 5) {
      const nextCell = this.generateRandomNumber(number);
      this.activateRandom(nextCell);
    }
  }
  generateRandomNumber(number) {
    return Math.floor(1 + Math.random() * number);
  }
  onCellClick(e) {
    let target = e.target;
    if (target.classList.contains('active')) {
      this.points = this.points + 1;
      this.count = this.count - 1;
      this.deactivateCell();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

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
;// CONCATENATED MODULE: ./src/index.js





// TODO: write your code in app.js
/******/ })()
;