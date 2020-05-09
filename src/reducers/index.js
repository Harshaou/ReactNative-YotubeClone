
const initialState = []

export default (state = initialState,action) => {
    switch(action.type){
        case 'FETCH-DATA':
            return action.payload
    default: return state
    }
}