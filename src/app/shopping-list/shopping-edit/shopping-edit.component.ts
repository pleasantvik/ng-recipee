import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IIngredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() ingredientAdded = new EventEmitter<IIngredient>();
  @ViewChild('f', { static: true })
  slForm: NgForm;
  // @ViewChild('amountInput', { static: true })
  // amountInputRef: ElementRef;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IIngredient;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (idx: number) => {
        this.editMode = true;
        this.editedItemIndex = idx;

        this.editedItem = this.shoppingListService.getIngredient(idx);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //TD: Form
  onSubmit(form: NgForm) {
    const newIngredient: IIngredient = {
      name: form.value.name,
      amount: form.value.amount,
    };

    // this.ingredientAdded.emit(newIngredient);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.editMode = false;

    this.slForm.reset();
  }

  // onAddItem() {
  //   const newIngredient: IIngredient = {
  //     name: this.nameInputRef.nativeElement.value,
  //     amount: this.amountInputRef.nativeElement.value,
  //   };

  //   // this.ingredientAdded.emit(newIngredient);
  //   this.shoppingListService.addIngredient(newIngredient);
  // }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }
}
