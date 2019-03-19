import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  clickedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.shoppingListService.uploadIngredients
      .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);

    this.shoppingListService.getIngredients();
  }

  onIngredientClick(clickedIngredient: Ingredient) {
      this.clickedIngredient = clickedIngredient;
  }
}
