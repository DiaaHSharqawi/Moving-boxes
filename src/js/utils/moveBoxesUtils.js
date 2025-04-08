export function getRandomNumberFromArray(array) {
  console.log(...array);
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function getBoxesIdsFromSide(boxesInTheSide) {
  const boxesSideIds = boxesInTheSide.map((box) => {
    const boxIdNumber = Number(box.id.split("-")[1]);
    return boxIdNumber;
  });
  return boxesSideIds;
}

export function getOppositeSide(side) {
  const oppositeSideMap = {
    "left-side": "right-side",
    "right-side": "left-side",
  };
  return oppositeSideMap[side];
}
