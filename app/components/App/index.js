
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function App() {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default App;
