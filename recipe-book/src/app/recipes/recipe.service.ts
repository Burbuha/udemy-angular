import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shakshuka',
      'Shakshuka is an easy, healthy breakfast (or any time of day) recipe in Israel and other parts of the Middle East and North Africa. It’s a simple combination of simmering tomatoes, onions, garlic, spices and gently poached eggs. It’s nourishing, filling and one recipe I guarantee you’ll make time and again.',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        new Ingredient('Onion', 1),
        new Ingredient('Red bell pepper', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Paprika', 1),
        new Ingredient('Tomatoes', 1),
        new Ingredient('Eggs', 6),
        new Ingredient('Salt ', 1),
        new Ingredient('Pepper ', 1),
      ]),
    new Recipe(
      'Easy Basic Pancakes',
      'Nothing says "weekend" like homemade pancakes for breakfast. Our easy recipe will help you whip them up in less than 30 minutes. Making pancake batter from scratch is so simple that you will wonder why you never did it before!',
      'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://assets.marthastewart.com/d31/easy_mothers_day_pancake_recipe/easy_mothers_day_pancake_recipe_horiz.jpg&w=1280&h=720&q=90&c=cc',
      [
        new Ingredient('Milk, cups', 1),
        new Ingredient('Eggs', 2),
        new Ingredient('Vanilla extract, tsp', 4),
        new Ingredient('self-raising flour, cups', 4),
        new Ingredient('Coles Bicarbonate Soda, tsp', 2),
        new Ingredient('Sugar, cups', 1),
        new Ingredient('Butter, g', 50),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this.shoppingListService.addIngredients(ingredients);
  };
}