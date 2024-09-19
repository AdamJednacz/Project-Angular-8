import { Component } from '@angular/core';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ContentComponent} from "./content/content.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    TopBarComponent,
    ContentComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
