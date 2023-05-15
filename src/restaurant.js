function createRestaurant(restaurantName) {
  var pizzaRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  console.log(pizzaRestaurant.menus)
  return pizzaRestaurant
  
}

function addMenuItem() {

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}