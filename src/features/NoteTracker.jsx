import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
export default function NoteTracker(){
    const notes = useSelector(state=>state.notes)
    const dispatch = useDispatch()
    const[text,setText] = useState("")
    return(
        <div>
            <input type="text" placeholder="Write something" value={text}
                    onChange={(e)=> setText(e.target.value)}
            />
            <p>
                {notes.map(note => (
                    <span key={note.id}>
                        {note.text}
                        <button onClick={() => dispatch({type: 'deleteNote', payload: note.id})}>
                            Delete
                        </button>
                    </span>
                ))}
            </p>
            <button onClick={()=>{dispatch({type:'addNote',payload:{id:Date.now(), text:text}})}}>Add</button>
            <button onClick={()=>{dispatch({type:'clearNote'})}}>clear</button>
        </div>
    )
}