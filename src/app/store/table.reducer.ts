import {createReducer, on, State} from "@ngrx/store";
import {ProductElement} from "../layout/content/tables/table/product-element.model";
import {addRow, emit} from "./table.action";

const initialState = { name: "", products:[ { product: '', quantity: 0, weight: 0 }]}
const initialStateForRow = { products: [{ product: '', quantity: 0, weight: 0 }]}

export const tableReducer = createReducer(
  initialState,
  // on(emit,(state, action) => state = action.value ),

)

//
//
//
// export const rowReducer = createReducer(
//   initialStateForRow,
//   on(addRow,(state, action) => state.products.push(action)),
//   on(removeRow,(state, action) => state.products.slice(action)),
// )
