const sum = (arr) => arr.reduce((acc, curr) => acc + curr.valor, 0);

const sub = (arr) => arr.reduce((acc, curr) => acc - curr.valor, 0);

const mult = (arr) => arr.reduce((acc, curr) => acc * curr.valor, 1);

const div = (arr) => arr.reduce((acc, curr) => acc / curr.valor, 0);


module.exports = {
  sum,
  sub,
  mult,
  div
}

// export {
//   sum,
//   sub,
//   mult,
//   div
// }