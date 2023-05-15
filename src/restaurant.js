function createRestaurant(restaurantName) {
  var pizzaRestaurant = {
    name: restaurantName,
    menus: {}
  }
  return pizzaRestaurant
}

module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem,
  // checkForFood
}