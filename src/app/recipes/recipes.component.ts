import { Component, OnInit } from '@angular/core';
import { IRecipe, Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  // selectedRecipe: IRecipe;
  // onSelect(recipe: Recipe) {
  //   this.selectedRecipe = recipe;
  // }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}
