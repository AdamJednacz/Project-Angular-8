import { Component } from '@angular/core';
import {TableComponent} from "./tables/table/table.component";
import {TablesComponent} from "./tables/tables.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    TableComponent,
    TablesComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
