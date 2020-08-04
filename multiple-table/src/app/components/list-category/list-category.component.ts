import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import * as model from '../category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  constructor(private _service: CategoryService) { }
  public category: model.Category;

  ngOnInit(): void {
    this.getAllCategory();
  }
  getAllCategory() {
    this._service.getAll().subscribe(
      response => {
        console.log(response);
      });
  }
}
