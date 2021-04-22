import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { SubCategory } from './models/sub-category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rental-management';
  categoriesList: Category[] = [];
  subCategoriesList: SubCategory[] = [];
  showCategories: boolean = true;
  subCategory: string;

  onSetCategories(event: Category[]) {
    this.categoriesList = event;
    console.log(event);
  }

  onSetSubCategories(event: Category) {
    this.showCategories = false;
    this.subCategoriesList = event.subcategories;
    this.subCategory = event.name;
  }

  navigateToHome() {
    this.subCategory = '';
    this.showCategories = true;
  }
}
