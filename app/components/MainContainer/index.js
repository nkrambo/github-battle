
import React, { PropTypes } from 'react';

function MainContainer({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
