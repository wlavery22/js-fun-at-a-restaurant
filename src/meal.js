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
// var duplicates = [];
// var ingredients = [];
// function addIngredients(item, ingredients) {
//   for (var i = 0; i < ingredients.length; i++) {
//     if (item === ingredients[i]) {
//       duplicates.push(item);
//     } 
//   }
//   if (duplicates.length === 0) {
//     ingredients.push(item);
//   }
// }

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

// function searchOrder(deliveryOrders, item1) {
//   var emptyArray = []
// for (var i = 0; i < deliveryOrders.length ; i++) {
//   emptyArray.push(deliveryOrders[i].item)
//   // emptyArray.join(', ')
// } {
//   if (emptyArray.includes(item1)) {
//   return true
// } else {
//   return false
// }
// }
// }
// function addIngredients(newIngredients, ingredients) {
//   if(!ingredients.includes(newIngredients))
//   return ingredients.push(newIngredients)

function formatPrice(initialPrice) {
  return "$" + initialPrice
}

// function formatPrice(initialPrice) {
//   var menuItemName = nameMenuItem("Carrot Cake");
//       var menuItem = createMenuItem(menuItemName, 5.99, "dessert");
//       var initialPrice = menuItem.price;
//   var formattedPrice = "$" + initialPrice
//   return formattedPrice
// }

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

// function createMenuItem(menuItem) {
//   var burritoItem = createMenuItem("Burrito");
//   var sushiItem = createMenuItem("Pizza");
//   var tacoItem = createMenuItem("Taco");
//   var nameMenuItem = `Delicious ${menuItem}`;
//   return nameMenuItem
// }
