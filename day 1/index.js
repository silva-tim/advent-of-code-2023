import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

function partOne(lines) {
  let count = 0;

  lines.map((line) => {
    let first = line.split("").find((v) => !Number.isNaN(Number(v)));
    let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));
    count += Number(first + last);
  });

  return count;
}

function partTwo(lines) {
  let count = 0;
  const regex = new RegExp(
    [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].join("|"),
    "g"
  );

  lines.map((line) => {
    let control = 0;
    let newLine = line;
    while (control === 0) {
      if (newLine.search(regex) < 0) {
        control = 1;
        break;
      }
      newLine = newLine.replaceAll(regex, function swap(match) {
        switch (match) {
          case "one":
            return "o1e";
          case "two":
            return "t2o";
          case "three":
            return "t3e";
          case "four":
            return "f4r";
          case "five":
            return "f5e";
          case "six":
            return "s6x";
          case "seven":
            return "s7n";
          case "eight":
            return "e8t";
          case "nine":
            return "n9e";
        }
      });
    }
    let first = newLine.split("").find((v) => !Number.isNaN(Number(v)));
    let last = newLine.split("").findLast((v) => !Number.isNaN(Number(v)));
    count += Number(first + last);
  });
  return count;
}

console.log(partOne(input));
console.log(partTwo(input));
