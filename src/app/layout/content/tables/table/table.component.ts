import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {NgIf} from "@angular/common";

export interface ProductElement {
  product: string;
  quantity: number;
  weight: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, FormsModule, NgIf],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tableName: string = '';  // Pole na nazwę tabeli
  displayedColumns: string[] = ['position', 'product', 'quantity', 'weight', 'actions'];
  dataSource: ProductElement[] = [
    { product: '', quantity: 0, weight:0 },
    { product: '', quantity: 0, weight: 0 }
  ];

  addRow() {
    const newRow: ProductElement = { product: '', quantity: 0, weight: 0 };
    this.dataSource = [...this.dataSource, newRow];
  }

  removeRow(index: number) {
    this.dataSource = this.dataSource.filter((_, i) => i !== index);
  }
}
