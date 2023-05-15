function nameMenuItem(menuItem) {
var menuItemName = `Delicious ${menuItem}`;
  return menuItemName
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  };
  return menuItem
};

function addIngredients(item, ingredients) {
  return ingredients.push(item);
}

function addIngredients(item, ingredients) {
  var anyDuplicates = false;
  for (var i = 0; i < ingredients.length; i++) {
    if (item === ingredients[i]) {
      anyDuplicates = true;
    } 
  }
  if (anyDuplicates === false) {
    ingredients.push(item);
  }
}

function formatPrice(initialPrice) {
  return "$" + initialPrice
}

function decreasePrice(name, price, type) {
  var menuItem = {
    name: name,
    price: 6.00,
    type: type
  };
  return menuItem.price * .9
}
var menuItem = {
};
var menuItemType = menuItem.type;
var title = nameMenuItem("Eggs & Bacon");
var ingredients = [];
function createRecipe(title, ingredients, menuItemType) {
var recipe = {
  title: title,
  ingredients: ingredients,
  type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

