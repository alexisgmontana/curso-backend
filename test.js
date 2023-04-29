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
    let newProduct = { title, description, price, thumbnail, code, stock };
    newProduct = { ...newProduct, id: this.#generateId() };
    let validation = Object.values(newProduct).some(
      (values) => values === null || values === "" || values === undefined
    );

    let validationCode = false;
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.code == newProduct.code) {
        validationCode = true;
      }
    }

    if (validation) {
      console.log("¡Error!, datos inválidos");
    } else if (validationCode) {
      console.log("¡Error!, código repetido");
    } else {
      this.products.push(newProduct);
    }
  }

  getProducts() {
    console.log(this.products);
    return this.products;
  }

  getProductById(id) {
    const productFound = this.products.find((prod) => prod.id == id);
    console.log(productFound || "Producto no encontrado");
    return productFound || "Producto no encontrado";
  }
}

// const product = new ProductManager();

/* product.addProduct(
  "Mi 1 producto",
  "buena calidad",
  500,
  "imágen.jpg",
  0123,
  9
);
product.addProduct(
  "Mi 2 producto",
  "mala calidad",
  200,
  "imágen2.jpg",
  0124,
  20
);
product.addProduct(
  "Mi 3 producto",
  "muy buena calidad",
  1100,
  "imágen3.jpg",
  0125,
  3
); */

// product.getProducts();

// product.getProductById(1);
