import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  @ViewChild('editRecipeForm') recipeForm: NgForm;

  recipe = new Recipe(null, '', '', '', []);
  editMode = false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    if (this.route.snapshot.params['id'] !== undefined) {
      this.recipe = this.recipeService.findById(this.route.snapshot.params['id']);
      this.editMode = true;
    }
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


}
