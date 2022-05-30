export const actionTypes = {
  SET_COURSE: "SET_COURSE",
  CLEAR_COURSE: "CLEAR_COURSE",
};

export const setCourse = (course:string) => {
  return { type: actionTypes.SET_COURSE, course };
};

export const clearCourse = () => {
  return { type: actionTypes.SET_COURSE };
};
