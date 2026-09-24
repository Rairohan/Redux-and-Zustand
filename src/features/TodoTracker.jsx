import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
export default function TodoTracker(){
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    const [text,setText]=useState("")
    return(
        <div>
            <input 
                type="text" 
                placeholder="What to do ?" 
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={()=>{dispatch({type:"addTodo",payload:{id:Date.now(),text:text,completed:false}})}}>
                Add
            </button>
            {
                todos.map((todo)=>
                    (
                    <p key={todo.id}>
                        {todo.text}
                        <input type="checkbox" checked={todo.completed} onChange={()=>dispatch({type:"toggleTodo",payload:todo.id})} />
                        <button onClick={()=>dispatch({type:"deleteTodo",payload:todo.id})}>Delete</button>
                    </p>
                    )
                )  
            }
        </div>
    )
}