import crypto from "crypto";

class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const foundProduct = this.products.find((product) => product.id === id)
        if (foundProduct) {
            console.log(foundProduct)
        } else {
            console.log("ID not found")
        }
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || ! product.thumbnail || !product.code || !product.stock) {
            console.log("The product must include all required properties")
        } else{
            const exist = this.products.some((item) => item.code === product.code)
            if (exist) {
                console.log("The product is already included")
            } else {
                product.id = crypto.randomBytes(10).toString("hex");
                this.products.push(product);
            }
        }
    }

}

const productManager = new ProductManager();

const camisaVeraniega = {
    title: "Camisa",
    description: "Hermosa camisa azul para el verano",
    price: 500,
    thumbnail: "https://th.bing.com/th/id/R.621000a5840afbffb7f621108bbc8a6e?rik=MqKLfuIkSZgOiQ&pid=ImgRaw&r=0",
    code: "A37",
    stock: 100
}

/*
const pantalonAzul = {
    title: "pantalon",
    description: "Hermoso pantalon azul de vestir",
    price: 800,
    thumbnail: "https://i.pinimg.com/474x/de/3e/62/de3e6230be52f08e4e61a2a1299f17f0.jpg",
    code: "B15",
    stock: 100
}
*/

productManager.addProduct(camisaVeraniega);
productManager.getProducts()

productManager.getProductById("172560d975ec98678ed8");

