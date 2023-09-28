const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = [];

ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  items.push(item);
});

document.querySelector("#ingredients").append(...items);
