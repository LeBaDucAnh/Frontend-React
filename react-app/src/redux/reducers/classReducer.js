export const Action = {
    SET_STATE: 'setState'
  }
  
  const initialState = {
    courseRecord: [],
    folderRecord: [],
    classRecord: {},
    nameCourse: [],
    numberCard : 0,
    course_id: [],
    memberRecord: [],
    // numberOfCourse: 0,
    // numberOfMember: 0
  }
  
  const reducer = (state=initialState, action) => {
    if(action.type === 'class/' + Action.SET_STATE) {
      return {...state, ...action.payload};
    }
    return state;
  }
  
  export default reducer;