import { loadDataArray } from "../utils/data";

const inRange = (value, min, max) => {
    return value >= min && value <= max;
}

export function part1() {
  const data = loadDataArray("cleaning");
  const assignments = data.map((a) => a.split(',').map(b => b.split('-').map(c => Number(c))));
  let overlapCounter = 0;
  assignments.forEach((a, i) => {
    const elf1 = a[0]
    const elf2 = a[1]
    const elf1Min = elf1[0]
    const elf1Max = elf1[1]
    const elf2Min = elf2[0]
    const elf2Max = elf2[1]
    const elf2InElf1Range = inRange(elf2Min, elf1Min, elf1Max) && inRange(elf2Max, elf1Min, elf1Max);
    const elf1InElf2Range = inRange(elf1Min, elf2Min, elf2Max) && inRange(elf1Max, elf2Min, elf2Max);
    
    if (elf1InElf2Range || elf2InElf1Range) {
        overlapCounter++;
    }
  })

  return overlapCounter;
}

export function part2() {
    const data = loadDataArray("cleaning");
    const assignments = data.map((a) => a.split(',').map(b => b.split('-').map(c => Number(c))));
    let overlapCounter = 0;
    assignments.forEach((a, i) => {
      const elf1 = a[0]
      const elf2 = a[1]
      const elf1Min = elf1[0]
      const elf1Max = elf1[1]
      const elf2Min = elf2[0]
      const elf2Max = elf2[1]
      const elf2InElf1Range = inRange(elf2Min, elf1Min, elf1Max) || inRange(elf2Max, elf1Min, elf1Max);
      const elf1InElf2Range = inRange(elf1Min, elf2Min, elf2Max) || inRange(elf1Max, elf2Min, elf2Max);
      
      if (elf1InElf2Range || elf2InElf1Range) {
          overlapCounter++;
      }
    })
  
    return overlapCounter;
}
