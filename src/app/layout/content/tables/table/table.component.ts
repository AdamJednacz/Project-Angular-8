import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from "../../../../products.service";
import { NgForOf, NgIf } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { ProductElement } from "./product-element.model";
import { MatButton } from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  imports: [
    NgIf,
    MatTableModule,
    NgForOf,
    MatButton,
    FormsModule
  ],
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData: { name: string, products: ProductElement[] } | null = null;
  @Output() tableChange = new EventEmitter<{ name: string, products: ProductElement[] }>();

  productsService = inject(ProductsService);
  tableName: string = '';
  displayedColumns: string[] = ['position', 'product', 'quantity', 'weight', 'actions'];
  dataSource: ProductElement[] = [];
  products: string[] = [];

  initialDataSource: ProductElement[] = []; // To store the initial state of the table

  ngOnInit() {
    this.products = this.productsService.getProducts(); // Fetch the list of products

    if (this.tableData) {
      this.tableName = this.tableData.name;
      this.dataSource = this.tableData.products.length > 0 ? [...this.tableData.products] : [{ product: '', quantity: 0, weight: null }];
    } else {
      this.dataSource.push({ product: '', quantity: 0, weight: 0 });
    }


  }

  // Manual comparison function to detect if there are changes


  addRow() {
    const newRow: ProductElement = { product: '', quantity: 0, weight: null };
    this.dataSource.push(newRow); // Add new row to the table
    this.emitTableChange();       // Emit updated table data
  }

  removeRow(index: number) {
    this.dataSource.splice(index, 1); // Remove row from table
    if (this.dataSource.length === 0) {
      this.dataSource.push({ product: '', quantity: 0, weight: null }); // Ensure at least one row exists
    }
    this.emitTableChange();       // Emit updated table data
  }

  emitTableChange() {


      this.tableChange.emit({ name: this.tableName, products: this.dataSource });

  }
}
