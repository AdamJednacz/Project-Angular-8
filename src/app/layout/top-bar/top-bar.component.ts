import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}
