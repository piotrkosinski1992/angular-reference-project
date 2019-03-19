import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1, 'A Test Recipe', 'first description',
      'https://cdlb.mkcsites.com/-/media/kamispl-2016/recipe/800/kurczak_w_sosie_pieczarkowym_800.ashx?vd=20180617T005449Z&hash=73352D24F6B0CDDD39E8D5BB6A04E27A3BDBB72C',
      [new Ingredient('apples', 5), new Ingredient('bananas', 3)]),
    new Recipe(2, 'B Test Recipe', 'second description',
      'https://cdlb.mkcsites.com/-/media/kamispl-2016/recipe/800/kurczak_w_sosie_pieczarkowym_800.ashx?vd=20180617T005449Z&hash=73352D24F6B0CDDD39E8D5BB6A04E27A3BDBB72C',
      [new Ingredient('meat', 2), new Ingredient('salt', 3)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  findById(id: number) {
    return this.recipes.find(recipe => recipe.id == id);
  }
}
