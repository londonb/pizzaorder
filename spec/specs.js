describe ('Pizza', function() {
  it("creates an empty pizza order ready to be filled out with a cost of zero", function() {
  var testPizza = new Pizza(0,0);
  expect(testPizza.toppings).to.equal(0);
  expect(testPizza.pizzaSize).to.equal(0);
  expect(testPizza.cost).to.equal(0);
  });

  it("will know the price for a size of pizza", function() {
    var testPizza = new Pizza(2,"large");
    expect(testPizza.sizeCost()).to.equal(14);
  });

  it("will know how many toppings on the pizza", function() {
    var testPizza = new Pizza(2,"large");
    expect(testPizza.toppingTotal()).to.equal(2);
  });

  it("will know the total cost for the pizza", function() {
    var testPizza = new Pizza(3,"small");
    expect(testPizza.giveTotal()).to.equal(11.5);
  });
});
