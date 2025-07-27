const insitialState = {
    activeTab : 'home'
}

const rootReducer = (state = insitialState, action) =>{
    switch(action.type){
        case 'ACTIVE_TAB':
            return{...state, activeTab : action.payload}
        default :
            return state;
    }
}

export default rootReducer;