import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { saveTableValues } from './table.actions';

@Injectable()
export class TableEffects {
  constructor(private actions$: Actions) {}


}
