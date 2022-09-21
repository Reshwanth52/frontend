export const intialState= null

export const reducer =(state, action)=>{
    if(action.type==="USER"){
        return action.payload
    }
    if(action.type==="UPDATE"){
        return ({...state,data:action.payload})
    }
    if(action.type==="CLEAR"){
        return 
    }
    return state
}