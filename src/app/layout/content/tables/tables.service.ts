import { Injectable } from '@angular/core';
import {ProductElement} from "./table/product-element.model";




@Injectable({
  providedIn: 'root'
})
export class TablesService {
  tablesArray: { name: string, products: ProductElement[] }[] = [];
  loadFromLocalStorage() {
    const storedTables = localStorage.getItem('tables');
    if (storedTables) {
      this.tablesArray = JSON.parse(storedTables);

    }
  }

  updateLocalStorage() {
    localStorage.setItem('tables', JSON.stringify(this.tablesArray));
    console.log(this.tablesArray)
  }
}
