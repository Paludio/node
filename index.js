const fs = require('fs').promises;

const read = async () => {
  try {
    const products = await fs.readFile('./data.json', 'utf8');
    const { produtos } = JSON.parse(products);
    return produtos;
  }
  catch (err) {
    console.log(err);
  }
}

const write = async (product) => {
  try {
    const produtos = await read();
    produtos.push(product);
    await fs.writeFile('./data.json', JSON.stringify({ produtos }));
    const result = await read();
    return result;
  } catch (err) {}
}

const updateProduct = async (id, product) => {
  try {
    const produtos = await read();
    const update = produtos.map((produto) => {
      if (produto.id === id) {
        return {
          id,
          nome: product.name,
          valor: product.valor
        }
      }
      return produto;
    })
    await fs.writeFile('./data.json', JSON.stringify({ produtos: update }));
    const result = await read();
    return result;
  } catch (err) {
    console.log(err);
  }
}

const deleteProduct = async (id) => {
  const products = await read();
  const deleteProduct = products.filter((product) => product.id !== id);
  await write(deleteProduct);
}

module.exports = {
  read, 
  write,
  deleteProduct,
  updateProduct,
};