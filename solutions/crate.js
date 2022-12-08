import { loadDataArray } from "../utils/data";

const data = loadDataArray("crate");
const moves = data.slice(10).map((move) =>
  move
    .split(" ")
    .filter((x) => x.match(/\d/))
    .map((n) => Number(n))
);

export function part1() {
  const crates = {
    1: ["P", "V", "Z", "W", "D", "T"],
    2: ["D", "J", "F", "V", "W", "S", "L"],
    3: ["H", "B", "T", "V", "S", "L", "M", "Z"],
    4: ["J", "S", "R"],
    5: ["W", "L", "M", "F", "G", "B", "Z", "C"],
    6: ["B", "G", "R", "Z", "H", "V", "W", "Q"],
    7: ["N", "D", "B", "C", "P", "J", "V"],
    8: ["Q", "B", "T", "P"],
    9: ["C", "R", "Z", "G", "H"],
  };
  // Move X from Stack Y to Stack Z
  moves.forEach((move, index) => {
    const numToMove = move[0];
    const fromStack = move[1];
    const toStack = move[2];
    const cratesMoving = crates[fromStack].splice(0, numToMove).reverse();
    crates[toStack] = [...cratesMoving, ...crates[toStack]];
  });

  let solution = Object.values(crates)
    .map((stack) => stack[0])
    .join("");

  return solution;
}

export function part2() {
  const crates = {
    1: ["P", "V", "Z", "W", "D", "T"],
    2: ["D", "J", "F", "V", "W", "S", "L"],
    3: ["H", "B", "T", "V", "S", "L", "M", "Z"],
    4: ["J", "S", "R"],
    5: ["W", "L", "M", "F", "G", "B", "Z", "C"],
    6: ["B", "G", "R", "Z", "H", "V", "W", "Q"],
    7: ["N", "D", "B", "C", "P", "J", "V"],
    8: ["Q", "B", "T", "P"],
    9: ["C", "R", "Z", "G", "H"],
  };
  // Move X from Stack Y to Stack Z
  moves.forEach((move, index) => {
    const numToMove = move[0];
    const fromStack = move[1];
    const toStack = move[2];
    const cratesMoving = crates[fromStack].splice(0, numToMove);
    crates[toStack] = [...cratesMoving, ...crates[toStack]];
  });

  let solution = Object.values(crates)
    .map((stack) => stack[0])
    .join("");

  return solution;
}
