class ProductManager {
  constructor() {
    this.products = [];
  }

  #generateId() {
    let maxId = 0;
    for (let x = 0; x < this.products.length; x++) {
      let pr = this.products[x];
      if (pr.id > maxId) {
        maxId = pr.id;
      }
    }
    return ++maxId;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let newProduct = { title, description, thumbnail, price, code, stock };
    newProduct = { ...newProduct, id: this.#generateId() };
    this.products.push(newProduct);
  }

  getProducts() {
    console.log(this.products);
    return this.products;
  }

  getProductById(id) {
    const productFound = this.products.find((prod) => {
      prod.id === id;
    });
    if (productFound) {
      return productFound;
    } else {
      console.log("Not found!");
      return undefined;
    }
  }
}

const product = new ProductManager();

product.addProduct("cepillo", "es bueno", 500, "sin imagen", 1823, 9);

console.log(product.products);
