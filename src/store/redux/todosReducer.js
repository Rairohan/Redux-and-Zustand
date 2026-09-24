const initialState = {todos:[]}
export default function todosReducer(state=initialState,action){
    switch(action.type){
        case'addTodo': return {todos:[...state.todos,action.payload]}
        case'toggleTodo': return {
            todos:state.todos.map(todo=>
                todo.id === action.payload ? {...todo,completed: !todo.completed} : todo
            )
         }
        case'deleteTodo': return {todos: state.todos.filter(todo => todo.id !== action.payload)}
        default: return(state)
    }
}   