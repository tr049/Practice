import {Ingredient} from './ingredient';

export class Recipe {
  constructor(public Name: String, public Description: String, public ImagePath: String, public ingredients: Ingredient[]) {
  }
}
