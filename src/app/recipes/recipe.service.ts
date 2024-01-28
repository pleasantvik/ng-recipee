import { EventEmitter, Injectable } from '@angular/core';
import { IRecipe } from './recipe.model';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<IRecipe>();
  recipeChanged = new Subject<IRecipe[]>();
  private recipes: IRecipe[] = [];
  // private recipes: IRecipe[] = [
  //   {
  //     name: 'Recipe One',
  //     description: 'Japan omniscious discovery recipe',
  //     imagePath:
  //       'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ingredients: [
  //       { amount: 2, name: 'Meat' },
  //       { name: 'French fries', amount: 20 },
  //     ],
  //   },
  //   {
  //     name: 'The Royal Cuisine',
  //     description: 'The Korean meal of Saturn',
  //     imagePath:
  //       'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ingredients: [
  //       { amount: 6, name: 'egg' },
  //       { amount: 6, name: 'butter' },
  //     ],
  //   },
  // ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: IRecipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }
  addIngredientToShoppingList(ing: IIngredient[]) {
    this.slService.addIngredients(ing);
  }

  addRecipe(recipe: IRecipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: IRecipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

// recipes: Recipe[] = [
//   new Recipe(
//     'Recipe One',
//     'Japan omniscious discovery recipe',
//     'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   ),
//   new Recipe(
//     'Recipe Two',
//     'Just a desert recipe',
//     'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   ),
// ];
