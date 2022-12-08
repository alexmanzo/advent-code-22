import { loadDataArray } from "../utils/data";

const scoring = {
  rock: 1,
  paper: 2,
  scissors: 3,
  loss: 0,
  draw: 3,
  win: 6,
};

const calculateMyScore = (opponent, mine) => {
  let score = 0;

  if (opponent === mine) {
    score = scoring.draw;
  } else if (opponent === "rock" && mine === "paper") {
    score = scoring.win;
  } else if (opponent === "paper" && mine === "scissors") {
    score = scoring.win;
  } else if (opponent === "scissors" && mine === "rock") {
    score = scoring.win;
  } else {
    score = scoring.loss;
  }

  return score + scoring[mine];
};

const calculateMyMove = (opponent, result) => {
  if (result === "draw") {
    return opponent;
  } else if (opponent === "rock" && result === "win") {
    return "paper";
  } else if (opponent === "paper" && result === "win") {
    return "scissors";
  } else if (opponent === "scissors" && result === "win") {
    return "rock";
  } else if (opponent === "rock" && result === "lose") {
    return "scissors";
  } else if (opponent === "paper" && result === "lose") {
    return "rock";
  } else if (opponent === "scissors" && result === "lose") {
    return "paper";
  }
};

export function part1() {
  const results = {
    A: "rock",
    B: "paper",
    C: "scissors",
    X: "rock",
    Y: "paper",
    Z: "scissors",
  };
  const rounds = loadDataArray("rock-paper-scissors");
  let totalScore = 0;
  rounds.forEach((round) => {
    const opponent = results[round.split(" ")[0]];
    const mine = results[round.split(" ")[1]];
    const score = calculateMyScore(opponent, mine);
    totalScore = totalScore + calculateMyScore(opponent, mine);
    console.log({ opponent, mine, score, totalScore });
  });

  return totalScore;
}

export function part2() {
  const results = {
    A: "rock",
    B: "paper",
    C: "scissors",
    X: "lose",
    Y: "draw",
    Z: "win",
  };

  const rounds = loadDataArray("rock-paper-scissors");
  let totalScore = 0;
  rounds.forEach((round) => {
    const opponent = results[round.split(" ")[0]];
    const result = results[round.split(" ")[1]];
    const mine = calculateMyMove(opponent, result);
    const score = calculateMyScore(opponent, mine);
    totalScore = totalScore + calculateMyScore(opponent, mine);
    console.log({ result, opponent, mine, score, totalScore });
  });

  return totalScore;
}
