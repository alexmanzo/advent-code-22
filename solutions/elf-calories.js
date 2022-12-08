import { loadDataArray } from "../utils/data";

export function part1() {
  const data = loadDataArray("elf-calories");
  const elfCalorieStock = {};
  const digitRegex = /\d+/;
  let elf = 0;

  data.forEach((item) => {
    const isFoodItem = digitRegex.test(item);
    const elfStock = elfCalorieStock[elf];

    if (isFoodItem) {
      if (elfStock) {
        elfCalorieStock[elf] = elfStock + Number(item);
      } else {
        elfCalorieStock[elf] = Number(item);
      }
    } else {
      elf++;
    }
  });

  const solution = Math.max(...Object.values(elfCalorieStock));

  return solution;
}

export function part2() {
  const data = loadDataArray("elf-calories");
  const elfCalorieStock = {};
  const digitRegex = /\d+/;
  let elf = 0;

  data.forEach((item) => {
    const isFoodItem = digitRegex.test(item);
    const elfStock = elfCalorieStock[elf];

    if (isFoodItem) {
      if (elfStock) {
        elfCalorieStock[elf] = elfStock + Number(item);
      } else {
        elfCalorieStock[elf] = Number(item);
      }
    } else {
      elf++;
    }
  });

  const sortedElfCalorieStock = Object.values(elfCalorieStock).sort(function (a, b) {
    return b - a;
  });

  const solution = sortedElfCalorieStock[0] + sortedElfCalorieStock[1] + sortedElfCalorieStock[2];

  return solution;
}
