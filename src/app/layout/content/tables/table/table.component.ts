import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { MatTableModule } from '@angular/material/table';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from "@angular/common";
import {ProductsService} from "../../../../products.service";

export interface ProductElement {
  product: string;
  quantity: number;
  weight: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, FormsModule, NgIf, NgForOf, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  tableName: string = '';
  displayedColumns: string[] = ['position', 'product', 'quantity', 'weight', 'actions'];
  dataSource: ProductElement[] = [
    { product: '', quantity: 0, weight: 0 },
  ];


  form = new FormGroup({
   name:new FormControl(""),

  })
  formrow = new FormGroup({
    product:new FormControl(""),
    quantity: new FormControl(""),
    weight: new FormControl(""),
  })

  products: string[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.form.valueChanges.subscribe((value) => {
      console.log(value); // Log form value changes
    });
    this.formrow.valueChanges.subscribe((value) => {
      console.log(value); // Log form value changes
    });
  }

  addRow() {
    const newRow: ProductElement = { product: '', quantity: 0, weight: 0 };
    this.dataSource = [...this.dataSource, newRow];
  }

  removeRow(index: number) {
    this.dataSource = this.dataSource.filter((_, i) => i !== index);
  }

//
//
// kazdy row jako formularz

//trzeba zrobić tak aby każda tabela była zapisywana w tablicy obiektów jako obiekt
// [
//  {
//  name:string,
//  [
//    {
//      product:string,
//      quantity:number,
//      weight:number
//     }
//     ]
//  },
//  {
//  name:string,
//  [
//    {
//      product:string,
//      quantity:number,
//      weight:number
//     },
//     ]
//  }
// ]

}
