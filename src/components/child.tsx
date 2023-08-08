import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {multiplication} from "../store/store";
import {FaCartPlus} from 'react-icons/fa';
import "../scss/Child.scss"

function Child() {
    const val = useSelector((newval:any)=>newval.counter)
    const dispatch = useDispatch()
  return (
    <div>
    
    <h1>Price :: {val}</h1>
    <div className='stylechange'>
    <FaCartPlus />
  
    </div>
   
    <button className='btn btn-info' onClick={()=>dispatch(multiplication())}>Add to cart</button>
    </div>
  )
}

export default Child