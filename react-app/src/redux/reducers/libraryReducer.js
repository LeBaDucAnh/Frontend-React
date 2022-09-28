export const Action = {
    SET_STATE: 'setState'
  }
  
  const initialState = {
    folderList: [],
    classList: [],

  }
  
  const reducer = (state=initialState, action) => {
    if(action.type === 'library/' + Action.SET_STATE) {
      return {...state, ...action.payload};
    }
    return state;
  }
  
  export default reducer;