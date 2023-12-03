import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

function partOne(lines) {
  const max = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const checkedArr = [];
  let count = 0;

  lines.map((line) => {
    const sets = line
      .split(": ")[1]
      .split("; ")
      .map((set) => {
        const pulls = set.split(", ");
        return pulls.every((pull) => {
          const [count, color] = pull.split(" ");
          return max[color] >= count;
        });
      });
    checkedArr.push(sets.every((play) => play));
  });
  checkedArr.forEach((element, index) => {
    if (element) {
      count += index + 1;
    }
  });
  return count;
}

function partTwo(lines) {
  let count = 0;
  lines.map((line) => {
    const colors = {
      red: 0,
      green: 0,
      blue: 0,
    };
    const sets = line
      .split(": ")[1]
      .split("; ")
      .forEach((set) => {
        set.split(", ").forEach((color) => {
          const [count, name] = color.split(" ");
          if (colors[name] < count) {
            colors[name] = Number(count);
          }
        });
      });
    count += colors.red * colors.blue * colors.green;
  });
  return count;
}

console.log(partOne(input));
console.log(partTwo(input));
