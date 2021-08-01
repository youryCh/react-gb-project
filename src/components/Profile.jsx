import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, setShowName } from '../store/profile/actions';
import { getProfile } from '../store/profile/selectors';

export default function Profile(props) {
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();
  const { name, showName } = useSelector(getProfile);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(changeName(inputValue));
  };

  const handleShowName = () => {
    dispatch(setShowName(showName));
  };

  return (
    <React.Fragment>
      <h3>Your Profile</h3>
      <span style={showName ? {visibility: 'visible'} : {visibility: 'hidden'}}>
        Name: {name}
      </span>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
        />
        <button>Change name</button>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showName}
            onChange={handleShowName}
          />
          Show name
        </label>
      </form>
    </React.Fragment>
  );
}
