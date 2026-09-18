const initialState = {notes: []}
export default function noteReducer(state=initialState,action){
    switch(action.type)
    {
        case'addNote': return { notes:[...state.notes,action.payload]}
        case'deleteNote': return {notes:state.notes.filter(note=> note.id !== action.payload)}
        case'clearNote': return {notes:[]}
        default :return state
    }
}