import { Component, OnInit } from '@angular/core';

import * as model from '../category';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  public category: model.Category;

  submitted = false;
  constructor(private _service: CategoryService) { }

  ngOnInit(): void {
    this.addCategory();
  }
  addCategory(){
    this._service.create(this.category)
      .subscribe(response => {
        console.log(response);
        this.submitted = true;
      },
      
      error => {
        console.log(error);
      });
  }
}
