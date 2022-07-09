import { DECREMENT, DEC_BY_VALUE, INCREMENT, INC_BY_VALUE } from "../actions/Types";


export const CounterReducer = (state={counter:0}, action)=>{
      switch (action.type) {
        case INCREMENT:
          return {...state, counter: state.counter +1}

        case DECREMENT:
          return {...state, counter: state.counter -1}

        case INC_BY_VALUE:
            return {...state, counter: state.counter + action.payload }
  
        case DEC_BY_VALUE:
            return {...state, counter: state.counter - action.payload }
        default:
          return state
      }
}