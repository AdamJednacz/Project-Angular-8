import {
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


  constructor(private store: Store<{ tables: TablesState }>) {}


  ngOnInit() {
    this.products = this.productsService.getProducts();
    if (this.tableData) {
      this.tableName = this.tableData.name;
      this.dataSource = this.tableData.products.length > 0 ? JSON.parse(JSON.stringify(this.tableData.products)) : [{ product: '', quantity: 0, weight: null }];
    }
    this.buttonService.buttonClick$.subscribe(button => {
      if(button){
        this.emitTableChange();
      }
    })

  }

  ngAfterViewInit() {
    if (this.inputProducts.length > 0) {
      this.inputProducts.last.nativeElement.focus();
    }
  }

  addRow(index:number) {
    const newRow = { product: '', quantity: 0, weight: null };
    this.dataSource.splice(index + 1, 0, newRow);
    this.emitTableChange();

  }


  removeRow(index: number) {
    if (this.dataSource.length <= 1) return;
    this.dataSource.splice(index, 1);
    this.emitTableChange();
  }

  emitTableChange() {
    this.tableChange.emit({
      name: this.tableName,
      products: [...this.dataSource]
    });
  }


}
