
import React, { Component, PropTypes } from 'react';

import Results from '../../components/Results';
import { battle } from '../../utils/githubHelpers';

class ResultsContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      scores: [],
    };
  }

  async componentDidMount() {
    try {
      const scores = await battle(this.props.location.state.playersInfo);
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        scores,
        isLoading: false,
      });
    } catch (err) {
      throw new Error(`Error in ResultsContainer: ${err}`);
    }
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}
      />
    );
  }
}

ResultsContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ResultsContainer;
