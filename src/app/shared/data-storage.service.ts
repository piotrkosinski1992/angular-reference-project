import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  BASE_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient, private recipesService: RecipeService) {
  }

  saveAll() {
    return this.http.post(this.BASE_URL + 'saveAll', this.recipesService.getRecipes());
  }

  retrieveAll() {
    return this.http.get(this.BASE_URL + 'recipes').subscribe((recipes: Recipe[]) => {
      this.recipesService.updateAll(recipes);
    });
  }
}
