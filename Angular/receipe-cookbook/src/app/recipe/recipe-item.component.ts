import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../Models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: ['']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeID: number;
  constructor() { }

  ngOnInit() {
  }

}
