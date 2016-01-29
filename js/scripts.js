function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.cost = 0;
}

// Pizza.prototype.giveTotal = function() {
//   this.cost = this.toppings + this.pizzaSize;
//   console.log(this.pizzaSize);
//   return this.cost;
// }

Pizza.prototype.sizeCost = function() {
  if (this.pizzaSize === "small") {
    return 10;
  } else if (this.pizzaSize === "medium") {
    return 12;
  } else if (this.pizzaSize === "large") {
    return 14;
  } else if (this.pizzaSize === "xlarge") {
    return 16;
  } else {
    return false;
  }
}
