import {RouterModule} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const APP_ROUTES = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {path: 'recipe', component: RecipeComponent },
  {path: 'shopping-list', component: ShoppingListComponent }
];

export const App_Route_Provider = RouterModule.forRoot(APP_ROUTES);
