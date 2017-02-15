
import React, { Component, PropTypes } from 'react';

import Prompt from '../../components/Prompt';

class PromptContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  handleSubmitUser(e) {
    e.preventDefault();
    const { username } = this.state;
    this.setState({
      username: '',
    });

    const { playerOne } = this.props.routeParams;
    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: username,
        },
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`);
    }
  }

  handleUpdateUser(e) {
    this.setState({
      username: e.target.value,
    });
  }

  render() {
    return (
      <Prompt
        onSubmitUser={(e) => this.handleSubmitUser(e)}
        onUpdateUser={(e) => this.handleUpdateUser(e)}
        header={this.props.route.header}
        username={this.state.username}
      />
    );
  }
}

PromptContainer.propTypes = {
  route: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
};

export default PromptContainer;
