
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';

import './global-styles';
import App from './components/App';
import Home from './components/Home';
import PromptContainer from './containers/Prompt';
import ConfirmBattleContainer from './containers/ConfirmBattle';
import ResultsContainer from './containers/Results';

// observe custom font loading
const latoObserver = new FontFaceObserver('Lato', {});

// when font is loaded, add a font-family via body a class
latoObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
      <Route path="battle" component={ConfirmBattleContainer} />
      <Route path="results" component={ResultsContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
