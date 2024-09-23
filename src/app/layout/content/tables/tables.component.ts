import {Component, inject, OnInit} from '@angular/core';
import { TableComponent} from './table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgForOf } from "@angular/common";
import {TablesService} from "./tables.service";
import {ProductElement} from "./table/product-element.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

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
export class TablesComponent implements OnInit {

  tablesService = inject(TablesService);
  //
  // table$:Observable<{ name: string, products: ProductElement[] }>;
  //
  // constructor(private store:Store<{ table:{name: string, products: ProductElement[] }}>) {
  //   this.table$ = store.select('table');
  // }

  ngOnInit() {
    this.tablesService.loadFromLocalStorage()
    if (this.tablesService.tablesArray.length === 0) {
      this.addTable();
    }
  }

  addTable() {
    this.tablesService.tablesArray.push({ name: '', products: [] });
    this.tablesService.updateLocalStorage();
  }

  updateTable(index: number, updatedTable: { name: string, products: ProductElement[] }) {
    this.tablesService.tablesArray[index] = updatedTable;
    this.tablesService.updateLocalStorage();
  }

  removeTable(index: number) {
    this.tablesService.tablesArray.splice(index, 1);
    if (this.tablesService.tablesArray.length === 0) {
      this.addTable();
    }
    this.tablesService.updateLocalStorage();
  }



}
