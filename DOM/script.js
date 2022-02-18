
const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const takeProductsNames = () =>{
  productsNames = products
  .map ((phone) =>phone.name)

}

takeProductsNames();
console.log(productsNames);

const firstProductName = productsNames[0];
const secondProductName = productsNames[1];
const thirdProductName = productsNames[2];

const takeProductsBrands = () =>{
  productsBrands = products
  .map ((phone) =>phone.brand)

}

takeProductsBrands();
console.log(productsBrands);

const firstProductBrand = productsBrands[0];
const secondProductBrand = productsBrands[1];
const thirdProductBrand = productsBrands[2];

const takeProductsProperties = () =>{
  productsProperties = products
  .map ((phone) =>phone.properties)

}

takeProductsProperties();
console.log(productsProperties);

const firstProductProperties = productsProperties[0];
const secondProductProperties = productsProperties[1];
const thirdProductProperties = productsProperties[2];


const firstPhone = (model, brand, properties) => {
  const shopContainer = document.createElement("div");

  shopContainer.innerHTML = `
    <h1>${model}</h1>
    <h2>${brand}</h2>
`;
const list = document.createElement('ul');

 properties.forEach((item) =>{
   const listItem = document.createElement('li');
   listItem.innerText = item;

   list.append(listItem);
 })
  shopContainer.append(list);

  return shopContainer;
};

const shopItemElement = firstPhone(firstProductName, firstProductBrand, firstProductProperties);
document.body.append(shopItemElement);

const secondPhone = (model, brand, properties) => {
  const shopContainer = document.createElement("div");

  shopContainer.innerHTML = `
    <h1>${model}</h1>
    <h2>${brand}</h2>
`;
const list = document.createElement('ul');

 properties.forEach((item) =>{
   const listItem = document.createElement('li');
   listItem.innerText = item;

   list.append(listItem);
 })
  shopContainer.append(list);

  return shopContainer;
};

const shopItemElement2 = secondPhone(secondProductName, secondProductBrand, secondProductProperties);
document.body.append(shopItemElement2);

const thirdPhone = (model, brand, properties) => {
  const shopContainer = document.createElement("div");

  shopContainer.innerHTML = `
    <h1>${model}</h1>
    <h2>${brand}</h2>
`;
const list = document.createElement('ul');

 properties.forEach((item) =>{
   const listItem = document.createElement('li');
   listItem.innerText = item;

   list.append(listItem);
 })
  shopContainer.append(list);

  return shopContainer;
};

const shopItemElement3 = secondPhone(thirdProductName, thirdProductBrand, thirdProductProperties);
document.body.append(shopItemElement3);
