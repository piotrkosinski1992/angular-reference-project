import {Ingredient} from '../shared/ingredient.model';
import {Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingListService {

  @Output() uploadIngredients = new Subject<Ingredient[]>();

  constructor() {
  }


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    this.uploadIngredients.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.uploadIngredients.next(this.ingredients.slice());
  }

  clearIngredients() {
    this.ingredients = [];
    this.uploadIngredients.next(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(ing => ing.name !== ingredient.name && ing.amount !== ingredient.amount);
    this.uploadIngredients.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.uploadIngredients.next(this.ingredients.slice());
  }
}
