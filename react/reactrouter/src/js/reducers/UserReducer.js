export default function(state={user:{}},action){
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name:action.payload};
            break;
        }
        case "READ_USER": {
            state = {...state, user:action.payload};
            break;
        }
    }
    return state;//must return the state
}
