const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const ulEl = document.querySelector('#ingredients');
const elemets = [];

ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  elemets.push(itemEl);
});


ulEl.append(...elemets);
