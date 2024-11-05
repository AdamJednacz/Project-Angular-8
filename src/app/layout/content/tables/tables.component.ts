import {Component, inject, OnInit} from '@angular/core';
import { TableComponent} from './table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {AsyncPipe, NgForOf} from "@angular/common";
import {TablesService} from "./tables.service";
import {ProductElement} from "./table/product-element.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {addTable, loadTables, removeTable, updateTable} from "../../../store/tables-store/tables.actions";
import {TablesState} from "../../../store/tables-store/tables.reducers";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    TableComponent,
    MatButtonModule,
    RouterLink,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  tables$: Observable<{ name: string, products: ProductElement[] }[]>;

  constructor(private store: Store<{ tables: TablesState }>) {
    this.tables$ = store.select(state => state.tables.tables);
  }

  ngOnInit() {
    this.store.dispatch(loadTables());
    this.tables$.subscribe(tables => {
      console.log(tables);
      if (tables.length === 0) {
        this.storeAddTable();
      }
    });
  }

  storeAddTable() {
    const defaultRow: ProductElement = { position:1,product: '', quantity: 0, weight: null };
    this.store.dispatch(addTable({ value: { name: '', products: [defaultRow] } }));
  }

  storeRemoveTable(index: number) {
    this.store.dispatch(removeTable({ index: index }));
  }

  storeUpdateTable(index: number, updatedTable: { name: string, products: ProductElement[] }) {
    this.store.dispatch(updateTable({ index: index, table: updatedTable }));
  }



  // addTable() {
  //   this.tablesService.tablesArray.push({ name: '', products: [] });
  //   this.tablesService.updateLocalStorage();
  // }
  //
  // updateTable(index: number, updatedTable: { name: string, products: ProductElement[] }) {
  //   this.tablesService.tablesArray[index] = updatedTable;
  //   this.tablesService.updateLocalStorage();
  // }
  //
  // removeTable(index: number) {
  //   this.tablesService.tablesArray.splice(index, 1);
  //   if (this.tablesService.tablesArray.length === 0) {
  //     this.addTable();
  //   }
  //   this.tablesService.updateLocalStorage();
  // }



}
