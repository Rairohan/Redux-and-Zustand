import { useSelector,useDispatch } from "react-redux";
export default function CartTracker(){
    const items = useSelector(state=>state.items)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Cart Tracker</h2>
            <button onClick={()=>{dispatch({type:"addItems",payload:5})}}>add</button>
            <button onClick={()=>{dispatch({type:"removeItems",payload:3})}}>remove</button>
            <button onClick={()=>dispatch({type:"clearItems"})} >clear</button>
            <p>Items in cart: {items}</p>
        </div>
    )
}