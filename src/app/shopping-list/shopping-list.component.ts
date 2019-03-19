import {Component, OnDestroy, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];

  clickedIngredient: Ingredient;

  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.uploadIngredients
      .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);

    this.shoppingListService.getIngredients();
  }

  onIngredientClick(clickedIngredient: Ingredient) {
      this.clickedIngredient = clickedIngredient;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
