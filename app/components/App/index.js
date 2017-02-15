
import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function App({ children, location }) {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {React.cloneElement(children, { key: location.pathname })}
      </ReactCSSTransitionGroup>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default App;
