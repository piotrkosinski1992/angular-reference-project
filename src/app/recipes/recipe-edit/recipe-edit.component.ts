import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe = new Recipe(null, '', '', '', []);
  editMode = false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    if (this.route.snapshot.params['id'] !== undefined) {
      this.recipe = this.recipeService.findById(this.route.snapshot.params['id']);
      this.editMode = true;
    }

    this.recipeService.ingredientsChanged.subscribe((recipeId: number) => {
      this.recipe = this.recipeService.findById(recipeId);
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.update(this.recipe);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      const recipeId = this.recipeService.create(this.recipe);
      this.router.navigate(['../' + recipeId], {relativeTo: this.route});
    }
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient() {
    this.recipe.ingredients.push(new Ingredient('', null));
  }

  onDeleteIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }
}
