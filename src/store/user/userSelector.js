export const selectUser = (state) => state.user.user;
export const isLogginIn = (state) => !!(selectUser(state).id);