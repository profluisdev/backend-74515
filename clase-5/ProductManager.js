const fs = require("fs");
const path = require("path");

class ProductManager {
    constructor() {
        this.products = [];
        this.pathFile = path.join(__dirname, "./data/products.json");
    }

    async getProducts() {
        try {
            const productsJson = await fs.promises.readFile(this.pathFile, "utf-8");
            const productsParse = JSON.parse(productsJson);
            this.products = productsParse || [];
            // console.log(this.products);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    async getProductById(id) {
        try {
            await this.getProducts();

            const findProduct = this.products.find((product) => product.id === Number(id));

            if (!findProduct) throw new Error("Product not found");

            console.log(findProduct);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    async addProduct(product) {
        try {
            const { title, description, price, thumbnail, code, stock } = product;

            const newProduct = {
                id: this.products.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };

            const productExist = this.products.find((product) => product.code === code);
            if (productExist) throw new Error(`El producto con el código ${code} ya existe`);

            const arrayValues = Object.values(newProduct);

            if (arrayValues.includes(undefined)) throw new Error("Todos los datos son obligatorios");

            this.products.push(newProduct);

            await fs.promises.writeFile(this.pathFile, JSON.stringify(this.products));
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    async updateProduct(id, productData) {
        try {
            await this.getProducts();

            const index = this.products.findIndex((product) => product.id === id); // Si no encuentra el elemento que coincide devuelve un -1

            if (index == -1) throw new Error("Product not found");

            this.products[index] = {
                ...this.products[index], // Copiamos todos los valores originales
                ...productData, // sobre escribimos los nuevos valores
            };

            await fs.promises.writeFile(this.pathFile, JSON.stringify(this.products));
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    async deleteProduct(id) {
        try {
            await this.getProducts();

            await this.getProductById(id);

            this.products = this.products.filter((product) => product.id !== id);

            await fs.promises.writeFile(this.pathFile, JSON.stringify(this.products));
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}

const products = new ProductManager();

// console.log("Antes");
// products.getProducts();

// products.addProduct({
//     title: "Producto 1",
//     description: "Descripción del producto 1",
//     price: 100,
//     thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//     code: "ABC123",
//     stock: 10,
// });

// products.addProduct({
//     title: "Producto 2",
//     description: "Descripción del producto 2",
//     price: 200,
//     thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//     code: "ABC124",
//     stock: 10,
// });

// products.addProduct({
//     title: "Producto 3",
//     description: "Descripción del producto 3",
//     price: 200,
//     thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//     code: "ABC125",
//     stock: 10,
// });

// products.addProduct({
//     title: "Producto 3",
//     description: "Descripción del producto 3",
//     price: 200,
//     thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//     code: "ABC126",
// });

// console.log("Después");

// products.getProductById(6);

// products.getProducts();

// products.updateProduct(2, { title: "Nuevo título", price: 999 });

products.deleteProduct(6);
