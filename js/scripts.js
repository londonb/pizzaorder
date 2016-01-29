function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.cost = 0;
}

Pizza.prototype.giveTotal = function() {
  this.cost = this.toppings.length * .25 + this.pizzaSize;
  console.log(this.toppings);
  return this.cost;
}

var sizePrice = function(currentPizza) {
  if (currentPizza === "small") {
    currentPizza.pizzaSize = 10;
  } else if (currentPizza === "medium") {
    currentPizza.pizzaSize = 12;
  } else if (currentPizza === "large") {
    currentPizza.pizzaSize = 14;
  } else if (currentPizza === "xlarge") {
    currentPizza.pizzaSize = 16;
  } else {
    return false;
  }
}
