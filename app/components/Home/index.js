
import React from 'react';
import { Link } from 'react-router';

import MainContainer from '../MainContainer';
import H1 from '../H1';
import Button from '../Button';

function Home() {
  return (
    <MainContainer>
      <H1>Github Battle</H1>
      <Button>Get Started</Button>
      <Link to="/playerOne"></Link>
    </MainContainer>
  );
}

export default Home;
