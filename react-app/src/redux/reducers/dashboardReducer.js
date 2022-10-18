export const Action = {
    SET_STATE: 'setState'
  }
  
  const initialState = {
    classList: [],
    total: 0,
    classListAll: [],
    classRecord: [],
  }
  
  const reducer = (state=initialState, action) => {
    if(action.type === 'dashboard/' + Action.SET_STATE) {
      return {...state, ...action.payload};
    }
    return state;
  }
  
  export default reducer;