import { Injectable } from '@angular/core';
import {Ingredient} from '../Models/ingredient';

@Injectable()
export class ShoppingService {
  SelectedIngredients: Ingredient[] = [];
  constructor() { }
  getIngredients(): Ingredient[] {
    return this.SelectedIngredients;
  }
  addItemsToIngredients(list: Ingredient[]): void {
    Array.prototype.push.apply(this.SelectedIngredients, list);
  }
}
