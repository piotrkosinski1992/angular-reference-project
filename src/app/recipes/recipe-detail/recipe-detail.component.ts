import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService ,
              private shoppingListService: ShoppingListService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.recipe = this.recipeService.findById(param['id']);
    });
  }

  onToShoppingListClicked() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
