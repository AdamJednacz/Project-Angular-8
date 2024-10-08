import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonClickService {
  private buttonClickSubject = new Subject<string>();

  buttonClick$ = this.buttonClickSubject.asObservable();

  emitButtonClick(buttonName: string) {
    this.buttonClickSubject.next(buttonName);
  }
}
