const initialState = {
    searchData : [],
}

export const searchReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SEARCH_TODO":
            return{
               ...state, searchData:  action.message,
            }
            default :
    return state;
    }
    
}