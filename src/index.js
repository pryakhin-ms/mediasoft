import { data } from './scripts/data.js'
import { Cart } from './scripts/cart.js'

const cart = new Cart;

window.onload = function () {
  // Инициализируем начальное состояние корзины
  //const cart = new Cart();
  const cartRow = document.getElementById('row');
  //const cartCount = cart.count();
  //const currentSum = cart.sum();

  // Создаём блок с состоянием корзины
  const cartCondition = document.createElement('div');
  cartCondition.setAttribute('id', 'cartCondition');
  cartCondition.append(`В Вашей корзине ${cart.count()} позиций на сумму ${cart.sum()} usd`);

  // Создаём кнопку "Очистить корзину"
  const refreshCartButton = document.createElement('button');
  refreshCartButton.append("Очистить корзину");
  refreshCartButton.addEventListener('click', () => cart.deleteAll());
  refreshCartButton.addEventListener('click', () => {
    const cartCondition = document.getElementById('cartCondition');
    const newCartCondition = cartCondition.cloneNode(false);
    newCartCondition.append(`В Вашей корзине ${cart.count()} товаров на сумму ${cart.sum()} usd`);
    cartCondition.replaceWith(newCartCondition);
  });
  cartRow.append(cartCondition, refreshCartButton);

  // Создаём функции для сортировки товаров и привязываем к ссылкам
  // Сортировка по возрастанию цены
  const sortUp = document.getElementById('sort-up');
  sortUp.onclick = function () {
    const sortedItems = data.sort((a, b) => {
      const price1 = a.price;
      const price2 = b.price;
      return price1 - price2;
    });
    const container = document.getElementById('container');
    // Сохраняем строку с поисковыми элементами, чтобы затем снова ее ставить
    const sortRow = document.getElementById('sort-row');
    // Очищаем контейнер перед заполнением отсортированными элементами
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    const products = sortedItems.map(({ id, brand, model, price }) => {
      const itemTitle = document.createElement('h3');
      itemTitle.append(`${brand} ${model}`);
      
      const image = document.createElement('img');
      image.setAttribute("height", "100");
      image.setAttribute("width", "100");
      image.setAttribute("src", `src/img/${id}.jpg`);
  
      const itemPrice = document.createElement('h3');
      itemPrice.append(`Цена: ${price} usd`);
      // Инициализация кнопки "В корзину"
      const buttonBuy = document.createElement('button');
      buttonBuy.append("В корзину");
      buttonBuy.addEventListener('click', () => {
        cart.add({ id, brand, model, price });
        // Обновляем блок с состоянием корзины
        const cartCondition = document.getElementById('cartCondition');
        const newCartCondition = cartCondition.cloneNode(false);
        newCartCondition.append(`В Вашей корзине ${cart.count()} товаров на сумму ${cart.sum()} usd`);
        cartCondition.replaceWith(newCartCondition);
        /*const newCartCondition = document.createElement('div');
        newCartCondition.setAttribute('id', 'cartCondition');
        newCartCondition.append(`В Вашей корзине ${cart.count()} позиций на сумму ${cart.sum()} usd`);
        cartCondition.replaceWith(newCartCondition);
        alert(`${cart.sum()}`);*/
      });
  
      const item = document.createElement('div');
      
      item.append(itemTitle, image, itemPrice, buttonBuy);
      item.setAttribute("class", "item");
      
      return item;
    });
    container.append(sortRow);
    return container.append(...products);
  };

  // Сортировка по убыванию цены
  const sortDown = document.getElementById('sort-down');
  sortDown.onclick = function () {
    const sortedItems = data.sort((a, b) => {
      const price1 = a.price;
      const price2 = b.price;
      return price2 - price1;
    });
    const container = document.getElementById('container');
    // Сохраняем строку с поисковыми элементами, чтобы затем снова ее ставить
    const sortRow = document.getElementById('sort-row');
    // Очищаем контейнер перед заполнением отсортированными элементами
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    const products = sortedItems.map(({ id, brand, model, price }) => {
      const itemTitle = document.createElement('h3');
      itemTitle.append(`${brand} ${model}`);
      
      const image = document.createElement('img');
      image.setAttribute("height", "100");
      image.setAttribute("width", "100");
      image.setAttribute("src", `src/img/${id}.jpg`);
  
      const itemPrice = document.createElement('h3');
      itemPrice.append(`Цена: ${price} usd`);
      // Инициализация кнопки "В корзину"
      const buttonBuy = document.createElement('button');
      buttonBuy.append("В корзину");
      buttonBuy.addEventListener('click', () => {
        cart.add({ id, brand, model, price });
        // Обновляем блок с состоянием корзины
        const cartCondition = document.getElementById('cartCondition');
        const newCartCondition = cartCondition.cloneNode(false);
        newCartCondition.append(`В Вашей корзине ${cart.count()} товаров на сумму ${cart.sum()} usd`);
        cartCondition.replaceWith(newCartCondition);
        /*const newCartCondition = document.createElement('div');
        newCartCondition.setAttribute('id', 'cartCondition');
        newCartCondition.append(`В Вашей корзине ${cart.count()} позиций на сумму ${cart.sum()} usd`);
        cartCondition.replaceWith(newCartCondition);
        alert(`${cart.sum()}`);*/
      });
  
      const item = document.createElement('div');
      
      item.append(itemTitle, image, itemPrice, buttonBuy);
      item.setAttribute("class", "item");
      
      return item;
    });
    container.append(sortRow);
    return container.append(...products);
  };

  // Наполнение контейнера товарами при загрузке
  const container = document.getElementById('container');

  const products = data.map(({ id, brand, model, price }) => {
    const itemTitle = document.createElement('h3');
    itemTitle.append(`${brand} ${model}`);
    
    const image = document.createElement('img');
    image.setAttribute("height", "100");
    image.setAttribute("width", "100");
    image.setAttribute("src", `src/img/${id}.jpg`);

    const itemPrice = document.createElement('h3');
    itemPrice.append(`Цена: ${price} usd`);
    // Инициализация кнопки "В корзину"
    const buttonBuy = document.createElement('button');
    buttonBuy.append("В корзину");
    buttonBuy.addEventListener('click', () => {
      cart.add({ id, brand, model, price });
      // Обновляем блок с состоянием корзины
      const cartCondition = document.getElementById('cartCondition');
      const newCartCondition = cartCondition.cloneNode(false);
      newCartCondition.append(`В Вашей корзине ${cart.count()} товаров на сумму ${cart.sum()} usd`);
      cartCondition.replaceWith(newCartCondition);
      /*const newCartCondition = document.createElement('div');
      newCartCondition.setAttribute('id', 'cartCondition');
      newCartCondition.append(`В Вашей корзине ${cart.count()} позиций на сумму ${cart.sum()} usd`);
      cartCondition.replaceWith(newCartCondition);
      alert(`${cart.sum()}`);*/
    });

    const item = document.createElement('div');
    
    item.append(itemTitle, image, itemPrice, buttonBuy);
    item.setAttribute("class", "item");
    
    return item;
  });

  return container.append(...products);
};