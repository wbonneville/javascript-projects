// variables

const cartBtn = document.querySelector('.cart-btn')
const closeCartBtn = document.querySelector('.close-cart')
const clearCartBtn = document.querySelector('.clear-cart')
const cartDOM = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.cart-items')
const cartTotal = document.querySelector('.cart-total')
const cartContent = document.querySelector('.cart-content')
const productsDOM = document.querySelector('.products-center')
// cart 
let cart = [];

// getting the products
class Products { // setting the class
    async getProducts() { // async await & method 
        try {
        let result = await fetch("products.json") // fetching the products from products.json & waiting for whatever we're getting back
        let data = await result.json();
            return data;
        } catch (error) {
            console.log(error);
        } 
    }
}

// display products
class UI {

}

// local storage
class Storage {

}

document.addEventListener('DOMContentLoaded', () => { // event listening for DOM content to load
const ui = new UI();
const products = new Products();

// get all products
products.getProducts().then(data => console.log(data))
});






