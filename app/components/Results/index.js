
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import UserDetails from '../UserDetails';
import UserDetailsWrapper from '../UserDetailsWrapper';
import MainContainer from '../MainContainer';
import Loading from '../Loading';

function StartOver() {
  return (
    <div>
      <Link to="/playerOne">
        <button type="button">Start Over</button>
      </Link>
    </div>
  );
}

function Tie() {
  return (
    <MainContainer>
      <h1>{'It\'s a Tie!'}</h1>
      <StartOver />
    </MainContainer>
  );
}

function Results({ isLoading, scores, playersInfo }) {
  if (isLoading === true) {
    return <Loading />;
  }

  if (scores[0] === scores[1]) {
    return (
      <Tie scores={scores} playersInfo={playersInfo} />
    );
  }

  const winningIndex = scores[0] > scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div>
        <UserDetailsWrapper header="Winner">
          <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  );
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Results;
