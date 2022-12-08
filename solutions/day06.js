import { loadDataArray } from "../utils/data";

export function part1() {
  const data = loadDataArray("day06");
  const str = data[0];
  const split = str.split("");
  let index = 0;
  let matchFound = false;

  while (!matchFound || index === split.length - 4) {
    const testStr = split.slice(index, index + 4).join("");

    if (
      testStr[0] === testStr[1] ||
      testStr[0] === testStr[2] ||
      testStr[0] === testStr[3] ||
      testStr[1] === testStr[2] ||
      testStr[1] === testStr[3] ||
      testStr[2] === testStr[3]
    ) {
      matchFound = false;
    } else {
      console.log(testStr);
      matchFound = true;
    }

    index++;
  }

  const solution = index + 3;
  return solution;
}

export function part2() {
  const data = loadDataArray("day06");
  const str = data[0];
  const split = str.split("");
  let index = 0;
  let matchFound = false;

  while (!matchFound) {
    const testStr = split.slice(index, index + 14).join("");
    let strIndex = 0;
    while (strIndex < testStr.length - 1) {
      if (testStr.slice(strIndex + 1).includes(testStr[strIndex])) {
        matchFound = false;
        break;
      } else {
        matchFound = true;
      }
      strIndex++;
    }

    index++;
  }

  const solution = index + 13;
  return solution;
}
