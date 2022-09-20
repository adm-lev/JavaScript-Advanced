'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class Productlist {
    constructor (container='.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
            });
        this.render();
    }

    _getProducts () {

        return fetch (`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }


    render () {
        const block = document.querySelector(this.container);       
        for (const product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
// Д.З. метод, возвращающий сумму всех товаров
    // getSum () {
    //     let sum = 0;   
    //     console.log(this.goods);    
    //     this.goods.forEach(item => {
    //         sum += item.price;
    //     })
    //     return sum;
    // }
}

class ProductItem {
    constructor (product, img='img/placeholder.webp') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }

    render () {
        return `<div class ="product-item">
                <img src="${this.img}" width=150>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn btn">Купить</button>
                </div>`
    }
}
// Д.З. Классы для корзины и товара в корзине
class Cart {
    constructor (container='.cart-bubble') {
        this.container = container;
        this.basket = {};
        this._getBasket()
            .then(data => {
                this.basket = data;
                this.render();
            });
        this.render();
    }

    _getBasket () {
        return fetch (`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    // addItem () {}
    // editItem () {}
    // removeItem () {}

    render () {
        const block = document.querySelector(this.container);       
        for (const i in this.basket.contents) {           
            const item = new BasketItem(this.basket.contents[i]);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
}

class BasketItem {
    constructor (product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.quantity = product.quantity;
    }
    render () {
        return `<div class ="basket-item">                
                <p>${this.title}</p>
                <p>${this.price}</p>
                <p>${this.quantity}</p>                 
                </div>`
    }
}  

let list = new Productlist();
let cart = new Cart();

document.querySelector('.btn-cart').addEventListener('click', e => {
    document.querySelector('.cart-bubble').classList.toggle('hidden');
})


