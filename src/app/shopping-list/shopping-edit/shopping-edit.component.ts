import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm') inForm: NgForm;

  clickedIngredient: Ingredient;

  clickedIngredientIndex: number;

  subscription: Subscription;

  editMode = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.clickedIngredient = this.shoppingListService.getByIndex(index);
      this.editMode = true;
      this.clickedIngredientIndex = index;
      this.inForm.setValue({
        name: this.clickedIngredient.name,
        amount: this.clickedIngredient.amount
      });
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.clickedIngredientIndex,
        new Ingredient(this.inForm.value.name, this.inForm.value.amount));
      this.editMode = false;
    } else if (!this.editMode) {
      this.shoppingListService.addIngredient(new Ingredient(this.inForm.value.name, this.inForm.value.amount));
    }
    this.inForm.reset();

  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.clickedIngredientIndex);
    this.inForm.reset();
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
