/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function getRecipe(pieType){
  return recipes[pieType];
}

function bakePies(recipe, pieType, pieQuantity){
  for (let i = 0; i < pieQuantity; i++) {
      let combiningMsg = `Combining ingredients for ${pieType}: `
      combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
      console.log(combiningMsg);
      console.log(`Baked pie ${i + 1}!`);
    }
}

function costOfEachPie(recipe){
  return recipe.reduce((prev, current) => {
      return prev + current.cost;
    }, recipe[0].cost);
}

function totalCostOfAllPies(costOfPie,pieQuantity){
  return costOfPie*pieQuantity
}

function totalRevenue(totalCost, profitMargin = 1.2){
  return totalCost*profitMargin
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = getRecipe(pieType)
  bakePies(recipe, pieType, pieQuantity)
  const costOfPie = costOfEachPie(recipe)
  console.log(`Cost per pie: ${costOfPie}`);
  const totalCost = totalCostOfAllPies(costOfPie,pieQuantity)
  const revenue = totalRevenue(totalCost, profitMargin)
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}


/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
