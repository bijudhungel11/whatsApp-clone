/* initial state is the  how the data layer looks before we passed anytypes of the data init*/
export const initialState = {
  user: null,
};
/* this is same as the action  ((which means pushing the data in the data layer when the user is sign in these will tell dispatch and go to push these user in the data layer ))*/
export const actionTypes = {
  SET_USER: "SET_USER",
};

/* these is the collection of the action which will switch them according to the data has been passed in dispatch */
/* these is the code for changing the data layer */
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
