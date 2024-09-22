import { Component } from '@angular/core';
import { TableComponent, ProductElement } from './table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    TableComponent,
    MatButtonModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  tablesArray: { name: string, products: ProductElement[] }[] = [];

  addTable() {
    this.tablesArray.push({ name: '', products: [] });
    this.updateLocalStorage();
  }

  updateTable(index: number, name: string, products: ProductElement[]) {
    this.tablesArray[index].name = name;
    this.tablesArray[index].products = products;
    this.updateLocalStorage();

  }

  removeTable(index: number) {
    // Remove table from the tablesArray
    this.tablesArray.splice(index, 1);
    // Update the local storage after removing the table
    this.updateLocalStorage();
  }


  updateLocalStorage() {
    localStorage.setItem('tables', JSON.stringify(this.tablesArray));
    console.log(this.tablesArray)
  }

  loadFromLocalStorage() {
    const storedTables = localStorage.getItem('tables');

    if (storedTables) {
      this.tablesArray = JSON.parse(storedTables);
    }
  }

  ngOnInit() {
    this.loadFromLocalStorage();
  }
}
