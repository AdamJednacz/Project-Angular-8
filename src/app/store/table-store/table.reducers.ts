// src/app/table-store/table.reducers.ts
import { createReducer, on } from '@ngrx/store';

import {ProductElement} from "../../layout/content/tables/table/product-element.model";
import {addTable, removeTable} from "../tables-store/tables.actions";
import {addRow, removeRow, saveTableValues} from "./table.actions";


export interface Rows{
 products: ProductElement[] ;
}



export const initialState: Rows = {
   products:[]
};

export const tableReducers = createReducer(
  initialState,
  on(addRow, (state, { product }) => ({
    ...state,
    products : [...state.products, product ],
  })),
  on(removeRow, (state, { index }) => ({
    ...state,
    products: state.products.filter((_, i) => i !== index),
  })),

);
