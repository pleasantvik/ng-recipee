import { Component, OnDestroy, OnInit } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  // providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IIngredient[];
  igChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangedSub = this.shoppingListService.ingredientChange.subscribe(
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

  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

  onEditItem(idx: number) {
    this.shoppingListService.startedEditing.next(idx);
  }
}
