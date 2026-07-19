/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime = -1) {
  if(remainingTime < 0){
    return "You forgot to set the timer."
  }
  if (remainingTime > 0) {
    return "Not done, please wait."
  }
  return "Lasagna is done."
}
export function preparationTime(layers,time =2) {
  return layers.length * time
}
export function quantities(layers) {
  let quatity = {
    noodles: 0,
    sauce: 0
  }
  for(let layer of layers){
    if(layer === "noodles"){quatity.noodles += 50}
    if(layer === "sauce"){quatity.sauce += 0.2}
  }
  return quatity
}
export function addSecretIngredient(friendsList,myList) {
  myList.push(friendsList[friendsList.length - 1]);
}
export function scaleRecipe(recipe, desiredPortion, defaultPortion=2) {
  const recipeCopy = {...recipe}
  desiredPortion /= defaultPortion
  for(let items of Object.keys(recipeCopy)){
    recipeCopy[items] *= desiredPortion
  }
  return recipeCopy;
}