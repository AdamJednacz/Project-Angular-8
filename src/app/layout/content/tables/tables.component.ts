import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ProductElement, TableComponent} from './table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

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
  tablesArray: number[] = [];




  addTable() {
    // Dodaje nową tabelę do tablicy
    this.tablesArray.push(this.tablesArray.length + 1);
  }
}
