
import React, { Component, PropTypes } from 'react';

import ConfirmBattle from '../../components/ConfirmBattle';
import { getPlayersInfo } from '../../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      playersInfo: [],
    };
  }

  async componentDidMount() {
    const { query } = this.props.location;
    try {
      const players = await getPlayersInfo([query.playerOne, query.playerTwo]);
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        isLoading: false,
        playersInfo: [players[0], players[1]],
      });
    } catch (err) {
      throw new Error(`Error in ConfirmBattleContainer: ${err}`);
    }
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={() => this.handleInitiateBattle()}
        playersInfo={this.state.playersInfo}
      />
    );
  }
}

ConfirmBattleContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ConfirmBattleContainer;
