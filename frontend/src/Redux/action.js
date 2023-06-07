export const setItem = (item) =>{
    return{
        type:'SETITEM',
        payload:item
    }
}

export const updateWorkout = (item) =>{
    return{
        type:'UPDATEWORKOUT',
        payload:item
    }
}

export const deleteItem = (id) =>{
    return{
        type:'DELETE',
        payload:id
    }
}