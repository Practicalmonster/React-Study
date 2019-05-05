const redux= require('redux')
const createStore= redux.createStore;
const init = {
    counter:0
};

//reducer
const mainReducer= (state=init, action)=>{
    switch(action.type){
        case 'INC_COUNTER':
        return {...state, counter:state.counter+1}
        case 'de':
        return {counter:-1}
    }
}

//store
const store = createStore(mainReducer);
console.log(store.getState())
//subscription
store.subscribe(()=>{
    console.log('Subscribtion' , store.getState())
})



//dispatch action
store.dispatch({type: 'INC_COUNTER'})
