import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from 'src/app/models/sub-category.model';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css'],
})
export class SubCategoriesComponent implements OnInit {
  @Input()
  set subCategoriesList(subCategoriesList: SubCategory[]) {
    this._subCategoriesList = subCategoriesList;
  }
  get subCategoriesList() {
    return this._subCategoriesList;
  }
  _subCategoriesList: SubCategory[] = [];
  constructor() {}

  ngOnInit(): void {}
}
