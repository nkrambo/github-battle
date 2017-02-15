
/**
* A common button, if you pass it a prop "route" it'll render a link to a react-router route
* otherwise it'll render a link with an onclick
*/

import React, { PropTypes, Children } from 'react';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function Button({ href, onClick, children, handleRoute }) {
  // Render an anchor tag
  let button = (
    <A href={href} onClick={onClick}>
      {Children.toArray(children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (handleRoute) {
    button = (
      <StyledButton onClick={handleRoute}>
        {Children.toArray(children)}
      </StyledButton>
    );
  }

  return (
    <Wrapper>
      {button}
    </Wrapper>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,  // eslint-disable-line react/require-default-props
  href: PropTypes.string,       // eslint-disable-line react/require-default-props
  onClick: PropTypes.func,      // eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired,
};

export default Button;
