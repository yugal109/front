
interface reactionState{
    loading:boolean,
    length:number,
    reactionsList:[]
}

export const reactionReducer=(state:reactionState={loading:false,length:0,reactionsList:[]},action:any)=>{
    switch(action.type){
        case "REACTIONS_LIST_FETCHING":
            return {...state,loading:true}
        case 'REACTIONS_LIST_LOADED':
            return {...state,loading:false,reactionsList:action.payload}
        case "SET_LENGTH":
            return {...state,length:action.payload}
        case "LENGTHEN_LENGTH":
            return {...state,length:state.length+1}
        case "SHORTEN_LENGTH":
            return {...state,length:state.length-1}
        default:
            return {...state}
    }
}