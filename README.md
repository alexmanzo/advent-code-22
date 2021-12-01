# Advent of Code Template

## Setup
After cloning this repo, be sure to `npm install` to fetch the required dependencies.

## Usage

### Problem Initialization
When starting on a new problem, for example "Sonar Sweep", run the following command to set up the files necessary:
```
npm run init sonar-sweep
```

This command will create a data file in the `./data` directory for your new problem, into which you can paste the data for this day's problem.  In this example case, the file would be `./data/sonar-sweep.txt`.

The initialization also creates a file in the `./solutions` directory for the problem, with exported functions for both Part 1 and Part 2 of the day's puzzle, both of which pull data in from the data file.  In this example case, the file would be `./solutions/sonar-sweep.js`.

### Running Solutions
To run your solution code, use the following command:
```
npm run solve sonar-sweep
```

This will run both Part 1 and Part 2 and print the solutions for each, using babel to transpile the solution file.
