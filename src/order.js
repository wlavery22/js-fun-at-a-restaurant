function takeOrder(order, deliveryOrders) {
  return deliveryOrders.push(order)
}

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(order)
  }
}

// Pseudo: you need a for loop that iterates through 
// each element(object) in the array, and a conditional
// that checks the value of the orderNumber key
// and if that value === argument passed into the 
// function then that element(object) is removed /
// returned
function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1)
      return deliveryOrders
    }
  }
}

function listItems(items) {
  var itemNames = [];
  for (var i = 0; i < items.length; i++) {
    itemNames.push(items[i].item)
}
  return itemNames.join(", ")
}
// var order1 = {
//   orderNumber: 1234,
//   item: "burger",
//   price: "8.99",
//   orderType: "delivery",
//   status: "accepted"
// };
// var order2 = {
//   orderNumber: 2342,
//   item: "blt sandwich",
//   price: "5.99",
//   orderType: "delivery",
//   status: "accepted"
// };
function searchOrder(deliveryOrders, food) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
  return (items.includes(food)) 
  // console.log(items);
}

// var deliveryOrders = [order1, order2];
// function searchOrder(deliveryOrders, itemName) {
//   var orderStatus = false;
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].item === itemName) {
//       orderStatus = true;
//     }
//   }
//   return orderStatus
// }
// console.log(listItems(items));
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
  