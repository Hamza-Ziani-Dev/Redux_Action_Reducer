import { DECREMENT, DEC_BY_VALUE, INCREMENT, INC_BY_VALUE } from "./Types"


export const actionIncrement = async (dispatch) =>{
  return dispatch({
    type: INCREMENT
  })
}

export const actionDecrement = async (dispatch) =>{
  return dispatch({
    type: DECREMENT
  })
}

export const actionIncrementByValue = async (dispatch, v1) =>{
  return dispatch({
    type: INC_BY_VALUE,
    payload : v1
  })
}
export const actionDecrementByValue = async (dispatch, v1) =>{
  return dispatch({
    type: DEC_BY_VALUE,
    payload : v1
  })
}