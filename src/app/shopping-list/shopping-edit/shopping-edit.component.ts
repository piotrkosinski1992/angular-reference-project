import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name;
  @ViewChild('amountInput') amount;

  @Input() clickedIngredient: Ingredient = {
    name: '',
    amount: 0
  };

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.clickedIngredient = {
      name: '',
      amount: 0
    };
  }

  onAdd() {
    this.shoppingListService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }
}
