import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';

@Injectable()
export class ShoppingListService {

  @Output() uploadIngredients = new EventEmitter<Ingredient[]>();

  constructor(private recipeService: RecipeService) {
  }


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    this.uploadIngredients.emit(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.uploadIngredients.emit(this.ingredients.slice());
  }

  clearIngredients() {
    this.ingredients = [];
    this.uploadIngredients.emit(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(ing => ing.name !== ingredient.name && ing.amount !== ingredient.amount);
    this.uploadIngredients.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.uploadIngredients.emit(this.ingredients.slice());
  }
}
