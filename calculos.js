const sum = (arr) => arr.reduce((acc, curr) => acc + curr.valor, 0);

const sub = (arr) => arr.reduce((acc, curr) => acc - curr.valor, 0);

module.exports = {
  sum,
  sub,
}

// export {
//   sum,
//   sub,
//   mult,
//   div
// }