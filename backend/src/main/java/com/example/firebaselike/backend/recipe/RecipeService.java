package com.example.firebaselike.backend.recipe;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepo recipeRepo;

  public RecipeService(RecipeRepo recipeRepo) {
    this.recipeRepo = recipeRepo;
  }

  public List<Recipe> getRecipes() {
        return recipeRepo.findAll();
    }

  public void saveAll(List<Recipe> recipes) {
      this.recipeRepo.saveAll(recipes);
  }

  public void addRecipe(Recipe recipe) {
    this.recipeRepo.save(recipe);
  }
}
