import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsService } from "../../../../products.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatTable, MatTableModule} from "@angular/material/table";

export interface ProductElement {
  product: string;
  quantity: number;
  weight: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatTableModule,
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() tableChange = new EventEmitter<{ name: string, products: ProductElement[] }>();

  tableName: string = '';
  displayedColumns: string[] = ['position', 'product', 'quantity', 'weight', 'actions'];
  dataSource: ProductElement[] = [{ product: '', quantity: 0, weight: 0 }];

  form = new FormGroup({
    name: new FormControl(""),
  });
  products: string[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.form.valueChanges.subscribe((value) => {
      this.tableName = value.name ?? '';
      this.emitTableChange();
    });
  }


  addRow() {
    const newRow: ProductElement = { product: '', quantity: 0, weight: 0 };
    this.dataSource = [...this.dataSource, newRow];
    this.emitTableChange();

  }

  removeRow(index: number) {
    this.dataSource = this.dataSource.filter((_, i) => i !== index);
    this.emitTableChange();
  }

  emitTableChange() {
    this.tableChange.emit({ name: this.tableName, products: this.dataSource });
  }
}
