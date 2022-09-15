const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const imgPath = 'img/goods.png'
const renderProduct = (item) => {
    return `<div class="product-item">
                <img src="${imgPath}" width="150" alt="pict">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn btn">Купить</button>
            </div>`
};
// map возвращает массив, который при переводе в строку, остается 
// с разделительными замятыми
// методом join можно создать строку заранее и убрать запятые.
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);