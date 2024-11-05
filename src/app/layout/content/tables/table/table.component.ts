import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ProductsService } from "../../../../products.service";
import { NgForOf, NgIf } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { ProductElement } from "./product-element.model";
import { MatButton } from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Table, TablesState} from "../../../../store/tables-store/tables.reducers";
import {ButtonClickService} from "../../../../button-click.service";
import {last} from "rxjs";



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
  @Input() tableId: number | string = ''; // Unikalny identyfikator tabeli
  @Input() tableData: { name: string, products: ProductElement[] } | null = null;
  @Output() tableChange = new EventEmitter<{ name: string, products: ProductElement[] }>();

  private lastAddedInput!: ElementRef | null;
  @ViewChildren('inputProduct') inputProducts!: QueryList<ElementRef>;
  tableName: string = '';
  displayedColumns: string[] = ['position', 'product', 'quantity', 'weight', 'actions'];
  dataSource: ProductElement[] = [];
  products: string[] = [];

  productsService = inject(ProductsService);
  buttonService = inject(ButtonClickService)

  lastAddedIndex: number | null = null;
  constructor(private store: Store<{ tables: TablesState }>) {}

  changeDetectorRef = inject(ChangeDetectorRef);
  ngOnInit() {
    this.products = this.productsService.getProducts();
    if (this.tableData) {
      this.tableName = this.tableData.name;
      this.dataSource = this.tableData.products.length > 0 ? JSON.parse(JSON.stringify(this.tableData.products)) : [{position:1, product: '', quantity: 0, weight: null }];
    }
    this.buttonService.buttonClick$.subscribe(button => {
      if(button){
        this.emitTableChange();
      }
    })

  }

  ngAfterViewInit() {


    if (this.lastAddedIndex !== null) {
      this.changeDetectorRef.detectChanges(); // Wymuszenie detekcji zmian
      // Ustaw fokus na inputie o unikalnym id
      const targetInputId = `product-input-${this.tableId}-${this.lastAddedIndex}`;
      const targetInput = document.getElementById(targetInputId);
      if (targetInput) {
        targetInput.focus(); // Ustawienie focusu na odpowiednim elemencie
      }
    }
  }


  addRow(index:number) {
    const newRow = {position:index+2, product: '', quantity: null, weight: null };
    this.dataSource.splice(index + 1, 0, newRow);
    this.lastAddedIndex = index + 1;
    this.emitTableChange();
    this.updatePositions(this.dataSource);
    setTimeout(() => this.ngAfterViewInit(), 10);
  }


  removeRow(index: number) {
    if (this.dataSource.length <= 1) return;
    this.dataSource.splice(index, 1);
    this.updatePositions(this.dataSource);
    this.emitTableChange();
  }

  emitTableChange() {
    this.tableChange.emit({
      name: this.tableName,
      products: [...this.dataSource]
    });
  }

  private updatePositions(dataSource: ProductElement[]): ProductElement[] {
    return dataSource.map((item, index) => ({
      ...item,
      position: index + 1
    }));
  }
}
