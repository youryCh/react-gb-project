export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const SHOW_NAME = 'PROFILE::SHOW_NAME';
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED';

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

export const setIsAuthed = isAuthed => {
  return {
    type: CHANGE_IS_AUTHED,
    payload: {
      isAuthed
    }
  };
};
