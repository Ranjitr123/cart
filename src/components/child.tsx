import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {multiplication} from "../store/store"

function Child() {
    const val = useSelector((newval:any)=>newval.counter)
    const dispatch = useDispatch()
  return (
    <div>
    <h1>{val}</h1>
    <button className='btn btn-info' onClick={()=>dispatch(multiplication())}>multiplication</button>
    </div>
  )
}

export default Child