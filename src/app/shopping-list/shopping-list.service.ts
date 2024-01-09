import { EventEmitter } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChange = new EventEmitter<IIngredient[]>();
  //? This is private so it is not accessible outside the class
  private ingredients: IIngredient[] = [
    {
      amount: 5,
      name: 'Apples',
    },
    {
      amount: 15,
      name: 'Carrot',
    },
  ];

  getIngredients() {
    return [...this.ingredients];
    //? Create new arrat
    // return this.ingredients.slice()
  }

  addIngredient(ingredient: IIngredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredient: IIngredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }
}
