import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeHeaderComponent } from './recipe/recipe-header.component';
import { RecipeListComponent } from './recipe/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropDownDirective } from './recipe/drop-down.directive';
import {ShoppingService} from './shopping-list/shopping-service.service';
import {App_Route_Provider} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeHeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropDownDirective,
  ],
  imports: [
    BrowserModule, App_Route_Provider
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
