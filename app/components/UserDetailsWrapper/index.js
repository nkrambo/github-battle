
import React, { PropTypes } from 'react';

function UserDetailsWrapper({ header, children }) {
  return (
    <div>
      <p>{header}</p>
      {children}
    </div>
  );
}

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserDetailsWrapper;
