package com.example.firebaselike.backend.recipe;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/recipes")
    public List<Recipe> getRecipes() {
        return recipeService.getRecipes();
    }

    @PostMapping("/saveAll")
    public void saveRecipes(@RequestBody List<Recipe> recipe) {
      recipeService.saveAll(recipe);
    }


    @PostMapping("/add")
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeService.addRecipe(recipe);
    }
}
