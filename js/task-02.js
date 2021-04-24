const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const ingredientsEl = document.querySelector('#ingredients');

const makeIngredients = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.textContent = option;
    return itemEl;
  });
};

const elements = makeIngredients(ingredients);
ingredientsEl.append(...elements);

