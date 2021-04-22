import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/sub-category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Output() selectedSubCategoriesList = new EventEmitter<SubCategory[]>();

  @Input()
  set categoriesList(categoriesList) {
    this._categoriesList = categoriesList;
  }
  get categoriesList() {
    return this._categoriesList;
  }
  _categoriesList: SubCategory[] = [];
  constructor() {}

  ngOnInit(): void {}

  setSelectedCategory(category: SubCategory[]) {
    this.selectedSubCategoriesList.emit(category);
  }
}
