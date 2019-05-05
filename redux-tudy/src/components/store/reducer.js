const init = {
    counter:0
}
export const reducer = (state = init, action)=>{
    switch(action.type){
        case 'INC_COUNTER':
        console.log("passed")
        return{...state,counter:state.counter+1}
    }
    return state;
}
