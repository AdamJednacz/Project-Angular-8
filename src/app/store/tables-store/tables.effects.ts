import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { addTable, loadTables, loadTablesSuccess, removeTable, updateTable, saveTables } from './tables.actions';
import { tap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { TablesState } from './tables.reducers';

@Injectable()
export class TablesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{ tables: TablesState }>
  ) {}


  loadTables$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTables),
      map(() => {
        const tables = JSON.parse(localStorage.getItem('StoreTables') || '[]');
        return loadTablesSuccess({ tables });
      })
    )
  );


  saveTables$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addTable, removeTable, updateTable,saveTables),
        tap(() => {
          this.store.select('tables').subscribe(tablesState => {
            localStorage.setItem('StoreTables', JSON.stringify(tablesState.tables));
          });
        })
      ),
    { dispatch: false }
  );
}
