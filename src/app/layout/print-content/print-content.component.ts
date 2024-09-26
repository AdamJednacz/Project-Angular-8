import {Component, inject, OnInit} from '@angular/core';

import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

import {TablesService} from "../content/tables/tables.service";

import {Store} from "@ngrx/store";
import {TablesState} from "../../store/tables-store/tables.reducers";
import {Observable} from "rxjs";
import {ProductElement} from "../content/tables/table/product-element.model";

@Component({
  selector: 'app-print-content',
  standalone: true,
  imports: [
    NgForOf,

    AsyncPipe,
    NgIf
  ],
  templateUrl: './print-content.component.html',
  styleUrls: ['./print-content.component.scss']
})
export class PrintContentComponent implements OnInit {

  tables$: Observable<{ name: string, products: ProductElement[] }[]>;

  constructor(private store: Store<{ tables: TablesState }>) {
    this.tables$ = store.select(state => state.tables.tables);
  }


  tablesService = inject(TablesService);

  ngOnInit() {

    this.tablesService.loadFromLocalStorage();
  }
}
