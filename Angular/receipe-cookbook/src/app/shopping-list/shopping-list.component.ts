import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Models/ingredient';
import {ShoppingService} from "./shopping-service.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.items = this.shoppingService.getIngredients();
  }

}
