// import { EventEmitter } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredientChange = new Subject<IIngredient[]>();
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
  getIngredient(idx: number) {
    return this.ingredients[idx];
    //? Create new arrat
    // return this.ingredients.slice()
  }

  addIngredient(ingredient: IIngredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

  updateIngredient(idx: number, newIngredient: IIngredient) {
    this.ingredients[idx] = newIngredient;
    this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredients(ingredient: IIngredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

  deleteIngredient(idx: number) {
    this.ingredients.splice(idx, 1);
    this.ingredientChange.next(this.ingredients.slice());
  }
}
