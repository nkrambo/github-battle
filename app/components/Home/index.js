
import React from 'react';
import { Link } from 'react-router';

import MainContainer from '../MainContainer';

function Home() {
  return (
    <MainContainer>
      <h1>Github Battle</h1>
      <p>What even is a jQuery?</p>
      <Link to="/playerOne">
        <button type="button">Get Started</button>
      </Link>
    </MainContainer>
  );
}

export default Home;
