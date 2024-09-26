import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatButton } from "@angular/material/button";
import {ButtonClickService} from "../../button-click.service";
import {Store} from "@ngrx/store";
import {TablesState} from "../../store/tables-store/tables.reducers";


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor(private buttonClickService: ButtonClickService) {}

  onButtonClick(buttonName: string) {
    this.buttonClickService.emitButtonClick(buttonName); // Emit the button click event
  }
}
