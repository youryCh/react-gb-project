export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const SHOW_NAME = 'PROFILE::SHOW_NAME';

export const changeName = name => {
  return {
    type: CHANGE_NAME,
    payload: {
      name
    }
  };
};

export const setShowName = (showName) => {
  return {
    type: SHOW_NAME,
    payload: {
      showName
    }
  };
};

export const setShowNameWithThunk = showName => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(setShowName(showName));
    }, 2000);
  };
};
