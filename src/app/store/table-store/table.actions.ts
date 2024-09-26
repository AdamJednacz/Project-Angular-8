import { createAction, props } from '@ngrx/store';
import {ProductElement} from "../../layout/content/tables/table/product-element.model";


export const addRow = createAction(
  '[Table] Add Row',
  props<{ product: ProductElement }>()
);

export const removeRow = createAction(
  '[Table] Remove Row',
  props<{index:number}>()
);

export const saveTableValues = createAction(
  '[Table Component] Save Table Values', props<{ tableName: string, products: ProductElement[] }>());
