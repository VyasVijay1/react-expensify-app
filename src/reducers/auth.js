export default (state = {}, action) => {
switch(action.type){
    case 'LOGON':
        return {
            uid: action.uid
        }
    case 'LOGOUT':
        return{}
    default:
        return state
}
}