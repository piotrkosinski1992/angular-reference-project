package com.example.firebaselike.backend.recipe;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepo extends JpaRepository<Recipe, Integer> {
}
