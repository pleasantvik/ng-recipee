import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IIngredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  // @Output() ingredientAdded = new EventEmitter<IIngredient>();
  @ViewChild('nameInput', { static: true })
  nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true })
  amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    const newIngredient: IIngredient = {
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value,
    };

    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
