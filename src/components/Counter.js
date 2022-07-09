
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionDecrement, actionDecrementByValue, actionIncrement, actionIncrementByValue } from '../actions/ActionCounter';

function Counter() {
  //const [counter , setCounter] = useState(0);
  const count = useSelector(state => state.counter);
  console.log(count);
  const dispatch = useDispatch()
  const handeleIncrement = () =>{
       //setCounter(counter + 1)
       actionIncrement(dispatch)
  }
  const handeleDecrement = () =>{
      //setCounter(counter - 1)
      actionDecrement(dispatch)
}
const handeleINC_Value = (v1)=>{
       actionIncrementByValue(dispatch, v1)
}
const handeleDEC_Value = (v1)=>{
  actionDecrementByValue(dispatch, v1)
}
  return (
    <div className="container my-4">
      <h2>Counter With Redux</h2>
      <button className="btn btn-primary" onClick={handeleIncrement}>+</button>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={handeleDecrement}>-</button>
      <div className='my-4'>
      <button className="btn btn-danger" onClick={(v1)=>handeleINC_Value(5)}>INCREMENT BY 5</button>
      </div>
      <div className='my-4'>
      <button className="btn btn-danger" onClick={(v1)=>handeleDEC_Value(5)}>INCREMENT BY 5</button>
      </div>
    </div>
  )
}

export default Counter