import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../Models/recipe';
import {ShoppingService} from '../../shopping-list/shopping-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
      this.shoppingService.addItemsToIngredients(this.selectedRecipe.ingredients);
  }
}
