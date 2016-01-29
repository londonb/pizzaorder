function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.cost = 0;
}

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

Pizza.prototype.toppingTotal = function() {
  this.toppings = this.toppings ++;
  return this.toppings;
}

Pizza.prototype.giveTotal = function() {
  return this.sizeCost() + (this.toppingTotal() * .5);
}
//END BUSINESS LOGIC

$(document).ready(function() {

  $("form#choosePizza").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $('select#sizeOfPizza').val();
    var toppings = $('input:checkbox:checked').length;
    var newPizza = new Pizza (toppings,pizzaSize);
    var cost = newPizza.giveTotal().toFixed(2);
    console.log(pizzaSize);
    console.log(toppings);
    console.log(cost);
    $("#moneyTotal").empty().append(cost);

    $('#cost').show();
  });
});
