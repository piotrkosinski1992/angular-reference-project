import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;

  newId: number;

  name = '';
  description = '';
  imagePath = '';

  editMode = false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const pathId = this.route.snapshot.params['id'];

    if (pathId !== undefined) {
      this.recipe = this.recipeService.findById(this.route.snapshot.params['id']);
      this.name = this.recipe.name;
      this.imagePath = this.recipe.imagePath;
      this.description = this.recipe.description
      this.editMode = true;
    }
  }


  onEdit() {
    this.recipe.name = this.name;
    this.recipe.imagePath = this.imagePath;
    this.recipe.description = this.description;
    this.recipeService.update(this.recipe);
  }

  onCreate() {
    this.newId = this.recipeService.create(this.name, this.description, this.imagePath);
    this.router.navigate(['../' + this.newId], {relativeTo: this.route});
  }
}
