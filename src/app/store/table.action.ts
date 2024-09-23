import {createAction, props} from "@ngrx/store";


export const emit = createAction(
  '[Table] Emit',
  props<{value:{ name: string, products: { product: string, quantity: number, weight:number }[]}}>()
)
export const addRow = createAction(
  '[Table] addRow',
  props<{value:{ product: string, quantity: number, weight: number }}>()
)

export const removeRow = createAction(
  '[Table] removeRow',
  props<{value:{ product: string, quantity: number, weight: number }}>()
)
