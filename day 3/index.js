import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

function partOne(lines) {
  const spread = lines.map((line) => line.split(""));
  let count = 0;
  const extraArr = [];
  for (let p = 0; p < spread[0].length; p++) {
    extraArr.push(".");
  }
  spread.push(extraArr);
  spread.unshift(extraArr);

  for (let arrayNo = 1; arrayNo < spread.length - 1; arrayNo++) {
    for (let indexNo = 0; indexNo < spread[arrayNo].length; indexNo++) {
      if (!Number.isNaN(Number(spread[arrayNo][indexNo]))) {
        let valid = false;
        let number = "";
        let start = indexNo;
        let end = indexNo;
        for (
          let testIndex = indexNo;
          !Number.isNaN(Number(spread[arrayNo][testIndex]));
          testIndex++
        ) {
          number += spread[arrayNo][testIndex];
          end = testIndex;
        }
        indexNo = end + 1;

        for (let check = start - 1; check <= end + 1; check++) {
          const rowBefore = spread[arrayNo - 1][check];
          const currentRow = spread[arrayNo][check];
          const rowAfter = spread[arrayNo + 1][check];

          if (check < 0) {
            continue;
          }
          if (check === spread[arrayNo].length) {
            continue;
          }
          if (
            (Number.isNaN(Number(rowBefore)) && rowBefore !== ".") ||
            (Number.isNaN(Number(currentRow)) && currentRow !== ".") ||
            (Number.isNaN(Number(rowAfter)) && rowAfter !== ".")
          ) {
            valid = true;
          }
        }

        if (valid) {
          count += Number(number);
        }
      }
    }
  }
  return count;
}

function partTwo(lines) {
  const spread = lines.map((line) => line.split(""));

  for (let arrayNo = 0; arrayNo < spread.length; arrayNo++) {
    for (let indexNo = 0; indexNo < spread[arrayNo].length; indexNo++) {
      if (spread[arrayNo][indexNo] === "*") {
        for (let check = indexNo - 1; check < indexNo + 1; check++) {}
      }
    }
  }
}
console.log(partOne(input));
