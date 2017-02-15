
import React, { PropTypes } from 'react';

function Prompt({ header, onSubmitUser, onUpdateUser, username }) {
  return (
    <div>
      <h1>{header}</h1>
      <div>
        <form onSubmit={onSubmitUser}>
          <div>
            <input
              onChange={onUpdateUser}
              placeholder="Github Username"
              type="text"
              value={username}
            />
          </div>
          <div>
            <button
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Prompt;
