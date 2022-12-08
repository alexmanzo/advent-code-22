import { loadDataArray } from "../utils/data";

const values = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

export function part1() {
  const data = loadDataArray("rucksack");
  const rucksacks = data.map((r) => r.split(""));
  const matchingItems = [];

  rucksacks.forEach((r) => {
    const halfway = Math.floor(r.length / 2);
    const firstCompartment = r.slice(0, halfway);
    const secondCompartment = r.slice(halfway);

    for (const item of firstCompartment) {
      if (secondCompartment.includes(item)) {
        matchingItems.push(item);
        break;
      }
    }
  });

  return matchingItems.map((item) => values[item]).reduce((a, b) => a + b);
}

export function part2() {
  const data = loadDataArray("rucksack");
  const groups = [];
  
  for (let i = 0; i < data.length; i += 3) {
    groups.push(data.slice(i, i + 3));
  }
  const groupRucksacks = groups.map(e =>{
    return e.map(r => r.split(""))
  });
  const matchingItems = [];

  groupRucksacks.forEach((r) => {
    const firstElf = r[0];
    const secondElf = r[1];
    const thirdElf = r[2];

    for (const item of firstElf) {
      if (secondElf.includes(item) && thirdElf.includes(item)) {
        matchingItems.push(item);
        break;
      }
    }
  });

  return matchingItems.map((item) => values[item]).reduce((a, b) => a + b);

}
