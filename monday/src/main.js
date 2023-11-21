function sum(v1, v2) {
  return v1 + v2;
}

function subtract(v1, v2) {
  return v1 - v2;
}

console.log(`quick sum ${sum(10,15)}`);
console.log(`quick subtract ${subtract(10,5)}`)

module.exports = {sum, subtract}