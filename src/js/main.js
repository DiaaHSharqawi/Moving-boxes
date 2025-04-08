import {
  getBoxesIdsFromSide,
  getOppositeSide,
  getRandomNumberFromArray,
} from "./utils/moveBoxesUtils.js";

const moveLeftButton = $("#move-left");
const moveRightButton = $("#move-right");
const alert = $(".alert");

function getRandomIdOfBoxToMove(boxesInTheSide) {
  const boxesIdsSide = getBoxesIdsFromSide(boxesInTheSide);
  const randomIdOfBoxToMove = getRandomNumberFromArray(boxesIdsSide);
  const idAttributeOfBoxToMove = `box-${randomIdOfBoxToMove}`;
  return idAttributeOfBoxToMove;
}

function removeBoxFromSide(boxesInTheSide, idAttributeOfBoxToMove) {
  boxesInTheSide.remove(`#${idAttributeOfBoxToMove}`);
}

function appendBoxToSide(boxesInOppositeTheSide, idAttributeOfBoxToMove) {
  const box = $(`<div>`, {
    id: idAttributeOfBoxToMove,
    class: `box`,
  });
  boxesInOppositeTheSide.append(box);
}

function handelMoveBoxButton(side) {
  const OPPOSITE_SIDE = getOppositeSide(side);
  const boxesInTheSide = $(`#${side} .boxes .box`);
  const hasAnyBoxToMove = boxesInTheSide.length > 0;
  if (!hasAnyBoxToMove) {
    alert.html(`<span> There is no more boxes to move ❌</span>`);
    return;
  } else {
    alert.html(``);
  }
  const idAttributeOfBoxToMove = getRandomIdOfBoxToMove(
    Array.from(boxesInTheSide)
  );
  removeBoxFromSide(boxesInTheSide, idAttributeOfBoxToMove);
  const oppositeSideBoxElements = $(`#${OPPOSITE_SIDE} .boxes`);
  appendBoxToSide(oppositeSideBoxElements, idAttributeOfBoxToMove);
}

moveLeftButton.click(() => {
  console.log(`clicked`);
  handelMoveBoxButton("right-side");
});

moveRightButton.click(() => {
  console.log(`right cliked`);
  handelMoveBoxButton("left-side");
});
