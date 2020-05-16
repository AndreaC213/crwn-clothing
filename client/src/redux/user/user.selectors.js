import { createSelector } from 'reselect';

// return the state we made changed
const selectUser = state => state.user;

// select the property inside the state to 
// create a memorize selector
// 2 parameters:
// first take the array of state
// second return the value we want after render this function
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

