window.onload = function () {
  const data = [
    {id: 1, brand: 'HUAWEI', model: 'P smart Z', price: 162, description: ''},
    {id: 2, brand: 'HONOR', model: '9X', price: 171, description: ''},
    {id: 3, brand: 'XIAOMI', model: 'Redmi Note 8 Pro ', price: 198, description: ''},
    {id: 4, brand: 'MEIZU', model: 'X8', price: 170, description: ''},
    {id: 5, brand: 'SAMSUNG', model: 'GALAXY A01', price: 140, description: ''}
  ];

  const container = document.getElementById('container');

  const products = data.map(({ id, brand, model, price }) => {
    const itemTitle = document.createElement('h3');
    itemTitle.append(`${brand} ${model}`);
    
    const image = document.createElement('img');
    image.setAttribute("height", "100");
    image.setAttribute("width", "100");
    image.setAttribute("src", `img/${id}.jpg`);

    const itemPrice = document.createElement('h3');
    itemPrice.append(`Цена: ${price} usd`);

    const buttonBuy = document.createElement('button');
    buttonBuy.append("В корзину");

    const item = document.createElement('div');
    
    item.append(itemTitle, image, itemPrice, buttonBuy);
    item.setAttribute("class", "item");
    
    return item;
  });

  return container.append(...products);
};