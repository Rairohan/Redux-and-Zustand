const initialState = {likes:0}
export function likeReducer(state = initialState,action){
    switch(action.type){
        case'like':
        return {likes:state.likes + 1}
        case'dislike':
        return {likes:state.likes - 1}
        case'reset':
        return {likes:0}
        default:
        return state
    }
}