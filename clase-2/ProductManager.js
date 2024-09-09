class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const findProduct = this.products.find((product) => product.id === Number(id));

        if (!findProduct) {
            return console.log("Not found");
        }

        console.log(findProduct);
    }

    addProduct(product) {
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
        if (productExist) return console.log(`Erro: El producto con el código ${code} ya existe`);

        const arrayValues = Object.values(newProduct);

        if (arrayValues.includes(undefined)) return console.log("Erro: Todos los datos son obligatorios");

        this.products.push(newProduct);
    }
}

const products = new ProductManager();

// console.log("Antes");
// products.getProducts();

products.addProduct({
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 100,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
    code: "ABC123",
    stock: 10,
});

products.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 200,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
    code: "ABC124",
    stock: 10,
});

products.addProduct({
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 200,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
    code: "ABC125",
    stock: 10,
});

products.addProduct({
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 200,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
    code: "ABC126",
});

// console.log("Después");
// products.getProducts();

// products.getProductById(2);
