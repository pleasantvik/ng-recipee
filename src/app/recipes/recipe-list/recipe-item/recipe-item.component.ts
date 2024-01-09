import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe, Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
}
