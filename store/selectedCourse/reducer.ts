import { selectedCourseDataType } from "../../data/dataTypes";
import { actionTypes } from "./action";

export const initialState:selectedCourseDataType = {
  course: "",
};

interface Action {
  type: string;
  course?: string;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.SET_COURSE:
      return {
        ...state,
        ...{ course: action.course },
      };
    case actionTypes.CLEAR_COURSE:
      // console.log(action)
      return {
        ...state,
        ...{course: ""},
      };
    default:
      return state;
  }
}

export default reducer;
