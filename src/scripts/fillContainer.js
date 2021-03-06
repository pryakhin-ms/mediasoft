export const fill = (data, cart) => {
    const container = document.getElementById('container');

    const products = data.map(({ id, brand, model, price }) => {
    const itemTitle = document.createElement('h3');
    itemTitle.append(`${brand} ${model}`);
    
    const image = document.createElement('img');
    image.setAttribute("height", "100");
    image.setAttribute("width", "100");
    image.src = `/img/${id}.jpg`;

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
    });

    const item = document.createElement('div');
    
    item.append(itemTitle, image, itemPrice, buttonBuy);
    item.setAttribute("class", "item");
    
    return item;
  });

  return container.append(...products);
}