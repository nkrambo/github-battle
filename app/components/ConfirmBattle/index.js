
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import UserDetailsWrapper from '../UserDetailsWrapper';
import UserDetails from '../UserDetails';
import MainContainer from '../MainContainer';
import Loading from '../Loading';

function ConfirmBattle({ isLoading, playersInfo, onInitiateBattle }) {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <h1>Confirm Players</h1>
      <div>
        <UserDetailsWrapper header="Player 1">
          <UserDetails info={playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Player 2">
          <UserDetails info={playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div>
        <div>
          <button type="button" onClick={onInitiateBattle}>Initiate Battle!</button>
        </div>
        <div>
          <Link to="/playerOne">
            <button type="button">Reselect Players</button>
          </Link>
        </div>
      </div>
    </MainContainer>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
};

export default ConfirmBattle;
