import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Onion', 1),
    new Ingredient('Red bell pepper', 1),
    new Ingredient('Garlic', 1),
    new Ingredient('Paprika', 1),
    new Ingredient('Tomatoes', 1),
    new Ingredient('Eggs', 6),
    new Ingredient('Salt ', 1),
    new Ingredient('Pepper ', 1),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  };

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}