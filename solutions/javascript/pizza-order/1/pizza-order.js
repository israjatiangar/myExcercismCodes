export function pizzaPrice(pizza, ...extras) {
  return pizzaToppingPrice(pizza) + recursiveAdder(extras)
  
  function recursiveAdder(arr){
    if(arr.length === 0){
      return 0
    }
    if(arr.length <= 1){
      return pizzaToppingPrice(arr[0])
    }
    return pizzaToppingPrice(arr[0]) + recursiveAdder(arr.slice(1))
  }
  //is this more editing && Professional?
  function pizzaToppingPrice(pizza){
    switch(pizza){
    case "Margherita": return 7
    case "Caprese": return 9
    case "Formaggio": return 10
    case "ExtraToppings": return 2
    case "ExtraSauce" : return 1
    default: -1
    }
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let result = 0
   for (let pizzas of pizzaOrders){
     result += pizzaPrice(pizzas.pizza,...pizzas.extras)
   }
  return result // this is the best i could do without breaking my brain
}
