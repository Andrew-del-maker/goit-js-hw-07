const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const ul = document.querySelector('#ingredients');
const elemets = [];

for (let i = 0; i < ingredients.length; i++){
   const ingredient = ingredients[i];
   const itemEl = document.createElement('li');
   itemEl.textContent = ingredient;
   elemets.push(itemEl);
}
ul.append(...elemets);
