import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent} from '../app/components/add-category/add-category.component';
import { UpdateCategoryComponent} from '../app/components/update-category/update-category.component';
import {DeleteCategoryComponent} from '../app/components/delete-category/delete-category.component';
import {ListCategoryComponent} from '../app/components/list-category/list-category.component'
const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'add', component: AddCategoryComponent },
  { path: 'update', component: UpdateCategoryComponent },
  { path: 'delete', component: DeleteCategoryComponent },
  { path: 'list', component: ListCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
