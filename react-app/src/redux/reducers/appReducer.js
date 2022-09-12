export const Action = {
  SET_STATE: 'setState'
}

const initialState = {
  counter: 0
}

const reducer = (state=initialState, action) => {
  if(action.type === 'app/' + Action.SET_STATE) {
    return {...state, ...action.payload};
  }
  return state;
}

export default reducer;