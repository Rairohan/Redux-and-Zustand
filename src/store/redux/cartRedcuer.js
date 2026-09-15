const initialState = {items:0}
export function cartReducer(state = initialState, action) {
    switch(action.type){
        case"addItems": return{items:state.items + action.payload}
        case"removeItems": return{items:state.items - action.payload}
        case "clearItems":return{items:0}
        default: return state
    }
}
