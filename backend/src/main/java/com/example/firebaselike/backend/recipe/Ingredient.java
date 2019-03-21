package com.example.firebaselike.backend.recipe;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Ingredient {

  @Id
  @GeneratedValue
  private Integer id;

  private String name;
  private int amount;

  private Ingredient() {}

  public Ingredient(Integer id, String name, int amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAmount() {
    return amount;
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }
}
