import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  // providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChange.subscribe(
      (ing: IIngredient[]) => {
        this.ingredients = ing;
      }
    );
  }
  onAdd() {
    this.ingredients.push({
      name: 'Tomato push',
      amount: 20,
    });
  }
}
