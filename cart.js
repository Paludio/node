const fs = require('fs').promises;
const { read, write, deleteProduct, updateProduct } = require('./index');
const { sum } = require('./calculos.js');

const response = async () => {
  try {
    const produtos = await read();
    const soma = sum(produtos);
    console.log(soma);
  }
  catch (err) {
    console.log(err);
  }
}

const writeProduct = async (product) => {
  try {
    const result = await write(product);
    console.log(result);
  } catch (err) {}
}

const deleteProduct1 = async (id) => {
  try {
    await deleteProduct(id);
    const result = await read();
    console.log(result);
  } catch (err) {}
}

const updateProduct1 = async (id, product) => {
  const result = await updateProduct(id, product);
  console.log(result);
}

updateProduct1(2, { name: 'Café', valor: 5});