import { Injectable } from '@angular/core';
import {Recipe} from '../Models/recipe';
import {Ingredient} from '../Models/ingredient';

@Injectable()
export class RecipeService {
  Recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://dannwoellertthefoodetymologist.files.wordpress.com/2015/10/schnitzel-7_edited.jpg', [
      new Ingredient('Fries', 2),
      new Ingredient('Zinger', 12)]),
    new Recipe('Summer Salad', 'Okayish', 'https://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Shawarma', 30),
      new Ingredient('Eggs', 22)])
  ];
  constructor() { }

  getRecipes(): Recipe[] {
    return this.Recipes;
  }

}
