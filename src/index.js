import { data } from './scripts/data.js'
import { Cart } from './scripts/cart.js'
import { fill } from './scripts/fillContainer.js'

const cart = new Cart;

window.onload = function () {

  // Инициализируем начальное состояние корзины
  const cartRow = document.getElementById('row');

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
    container.append(sortRow);
    fill(sortedItems, cart);
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
    container.append(sortRow);
    fill(sortedItems, cart);
  };

  // Наполнение контейнера товарами при загрузке

  const container = document.getElementById('container');

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(data), 3000);
  });
  promise.then((data) => fill(data, cart));
};