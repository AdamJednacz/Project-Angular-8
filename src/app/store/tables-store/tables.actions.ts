import { createAction, props } from '@ngrx/store';
import {ProductElement} from "../../layout/content/tables/table/product-element.model";


export const addTable = createAction(
  '[Table] Add Table',
  props<{ value: { name: string; products: ProductElement[] } }>()
);

export const removeTable = createAction(
  '[Tables] Remove Table',
  props<{index:number}>()
);


export const updateTable = createAction(
  '[Tables] Update Table',
  props<{ index: number, table: { name: string, products: ProductElement[] } }>()
);

export const loadTables = createAction('[Table] Load Tables');

export const loadTablesSuccess = createAction(
  '[Tables] Load Tables Success',
  props<{ tables: { name: string, products: ProductElement[] }[] }>()
);
export const saveTables = createAction('[Tables Component] Save Tables');


