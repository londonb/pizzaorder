describe ('Pizza', function() {
  it("creates an empty pizza order ready to be filled out with a cost of zero", function() {
  var testPizza = new Pizza(0);
  expect(testPizza.toppings).to.eql([]);
  expect(testPizza.pizzaSize).to.eql([]);
  expect(testPizza.cost).to.equal(0);
  });
});
