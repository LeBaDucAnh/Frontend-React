export const Action = {
    SET_STATE: 'setState'
  }
  
  const initialState = {
    lop: {},
   numberOfCourse: 0,
   numberOfMember: 0
  }
  
  const reducer = (state=initialState, action) => {
    if(action.type === 'class/' + Action.SET_STATE) {
      return {...state, ...action.payload};
    }
    return state;
  }
  
  export default reducer;