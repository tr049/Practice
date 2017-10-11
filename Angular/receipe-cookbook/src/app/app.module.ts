import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeHeaderComponent } from './recipe/recipe-header.component';
import { RecipeListComponent } from './recipe/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeHeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
