import {Component, inject, OnInit} from '@angular/core';

import {NgForOf} from "@angular/common";

import {TablesService} from "../content/tables/tables.service";

@Component({
  selector: 'app-print-content',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './print-content.component.html',
  styleUrls: ['./print-content.component.scss']
})
export class PrintContentComponent implements OnInit {

  tablesService = inject(TablesService);

  ngOnInit() {
    this.tablesService.loadFromLocalStorage();
  }
}
