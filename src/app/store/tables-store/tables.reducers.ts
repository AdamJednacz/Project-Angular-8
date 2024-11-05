// src/app/table-store/table.reducers.ts
import { createReducer, on } from '@ngrx/store';

import {ProductElement} from "../../layout/content/tables/table/product-element.model";
import {addTable, loadTables, loadTablesSuccess, removeTable, saveTables, updateTable} from "./tables.actions";

export interface Table{
   name: string, products: ProductElement[] ;
}

export interface TablesState {
  tables: Table[];
}

export const initialState: TablesState = {
  tables: [{name:'',products:[{ position:1,product: '', quantity: 0, weight: null }]}],
};

export const tablesReducers = createReducer(
  initialState,
  on(addTable, (state, { value }) => ({
    ...state,
    tables: [...state.tables, { ...value }], // Stworzenie nowego obiektu
  })),
  on(updateTable, (state, { index, table }) => {
    const updatedTables = [...state.tables];
    updatedTables[index] = table;
    return { ...state, tables: updatedTables };
  }),
  on(removeTable, (state, { index }) => ({
    ...state,
    tables: state.tables.filter((_, i) => i !== index),
  })),
  on(loadTablesSuccess, (state, { tables }) => ({
    ...state,
    tables,
  }))

);
