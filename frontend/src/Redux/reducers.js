export const setitem = (state=[],action)=>{
    switch(action.type){
        case 'SETITEM':return [...action.payload]
    }
    switch(action.type){
        case 'UPDATEWORKOUT':return [...state,action.payload]
    }
    switch(action.type){
        case 'DELETE': return state.filter((data)=> data._id !== action.payload)
        default: return state;
    }  
}