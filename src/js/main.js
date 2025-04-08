const leftSideBoxes = $("#left-side .boxes");

const moveLeftButton = $("#move-left");
const moveRightButton = $("#move-right");

const alert = $(".alert");

function getRandomNumberFromArray(array) {
  console.log(...array);
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const handelMoveButtonLeft = () => {
  const rightSideBoxElements = $("#right-side .boxes .box");
  const rightSideBoxElementsArray = Array.from(rightSideBoxElements);

  const hasAnyBoxToMove = rightSideBoxElementsArray.length > 0;
  if (!hasAnyBoxToMove) {
    alert.html(`<span> There is no more boxes to move ❌</span>`);
    return;
  }

  console.log(rightSideBoxElementsArray);

  const boxesRightSideIndexes = rightSideBoxElementsArray.map((element) => {
    const boxIdName = element.id;
    const boxIdNumber = Number(boxIdName.split("-")[1]);
    return boxIdNumber;
  });
  const boxIndexToMove = getRandomNumberFromArray(boxesRightSideIndexes);
  console.log(`box index to move : ${boxIndexToMove}`);
  const boxIdToMove = `#box-${boxIndexToMove}`;
  console.log(`box id to move ${boxIdToMove}`);
  rightSideBoxElements.remove(boxIdToMove);
  const leftSideBoxElements = $("#left-side .boxes");
  const box = $(`<div>`, {
    id: `box-${boxIndexToMove}`,
    class: `box`,
  });
  leftSideBoxElements.append(box);
};
moveLeftButton.click(handelMoveButtonLeft);
