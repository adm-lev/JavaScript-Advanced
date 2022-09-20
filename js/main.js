'use strict';


class Productlist {
    constructor (container='.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts () {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]
    }

    render () {
        const block = document.querySelector(this.container);
        for (const product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
// Д.З. метод, возвращающий сумму всех товаров
    getSum () {
        let sum = 0;       
        this.goods.forEach(item => {
            sum += item.price;
        })
        return sum;
    }
}

class ProductItem {
    constructor (product, img='img/placeholder.webp') {
        this.title = product.title;
        this.id = product.id;
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
    addItem () {

    }

    editItem () {
        
    }
    removeItem () {

    }

    render () {

    }
}

class CatItem {
    render () {

    }
}  

















let list = new Productlist();

console.log(list.getSum());

