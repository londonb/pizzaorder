describe ('Pizza', function() {
  it("creates an empty pizza order ready to be filled out with a cost of zero", function() {
  var testPizza = new Pizza(0,0);
  expect(testPizza.toppings).to.equal(0);
  expect(testPizza.pizzaSize).to.equal(0);
  expect(testPizza.cost).to.equal(0);
  });

  it("will total the cost of a pizza order", function() {
    var testPizza = new Pizza("large");
    console.log(testPizza);
    giveTotal(['pepperoni','sausage'],testPizza);
    console.log(sizePrice);
    expect(testPizza.giveTotal()).to.equal(14.50);
  });
});
