import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../Models/recipe';
import {RecipeService} from './recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: ['']
})
export class RecipeListComponent implements OnInit {

  recipeList: Recipe[] = [];
  constructor(public recipeService: RecipeService) {
  }
  @Output() recipeSelected = new EventEmitter<Recipe>();

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  }
  onSelected(selectedItem: Recipe ) {
    this.recipeSelected.emit(selectedItem);
    return false;
  }

}
