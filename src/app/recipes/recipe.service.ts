import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {

  recipesChanged = new Subject<void>();
  ingredientsChanged = new Subject<number>()

  private recipes: Recipe[] = [
    new Recipe(1, 'A Test Recipe', 'first description',
      'https://cdlb.mkcsites.com/-/media/kamispl-2016/recipe/800/kurczak_w_sosie_pieczarkowym_800.ashx?vd=20180617T005449Z&hash=73352D24F6B0CDDD39E8D5BB6A04E27A3BDBB72C',
      [new Ingredient('apples', 5), new Ingredient('bananas', 3), new Ingredient('COKOS', 55)]),
    new Recipe(2, 'B Test Recipe', 'second description',
      'https://cdlb.mkcsites.com/-/media/kamispl-2016/recipe/800/kurczak_w_sosie_pieczarkowym_800.ashx?vd=20180617T005449Z&hash=73352D24F6B0CDDD39E8D5BB6A04E27A3BDBB72C',
      [new Ingredient('meat', 2), new Ingredient('salt', 3)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  findById(id: number) {

    const recipeWithReference = this.recipes.find(recipe => recipe.id == id);

    const recipeCopy = JSON.parse(JSON.stringify(recipeWithReference));
    return recipeCopy;
  }

  update(recipe: Recipe) {
    this.recipes[recipe.id - 1] = recipe;
    this.recipesChanged.next();
  }

  create(recipe: Recipe): number {
    const id = this.recipes.length + 1;
    recipe.id = id;
    this.recipes.push(recipe);
    this.recipesChanged.next();
    return id;
  }

  remove(recipe: Recipe) {
    this.recipes = this.recipes.filter((r: Recipe) => r.id !== recipe.id);
    this.recipesChanged.next();
  }
}
