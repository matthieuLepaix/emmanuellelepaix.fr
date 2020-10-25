import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../Header';
import { Footer } from '../Footer';
import {
  Articles,
  Bio,
  Contact,
  Home,
  Prices,
  MoreInfos,
  Aromatherapy,
  Phytotherapy,
} from '../Pages';
import { Flex, Overlay } from '../shared';

const Main = styled(Flex)`
  min-height: calc(100vh - 10rem);
`;

export function App() {
  const [mobileNavigation, setMobileNavigation] = useState({ open: false });
  return (
    <Router basename="/">
      {mobileNavigation.open && (
        <Overlay onClick={() => setMobileNavigation({ open: false })} />
      )}
      <Header
        mobileNavigation={mobileNavigation}
        setMobileNavigation={setMobileNavigation}
      />
      <Main>
        <Switch>
          <Route exact path="/bio">
            <Bio />
          </Route>
          <Route exact path="/aromatherapy">
            <Aromatherapy />
          </Route>
          <Route exact path="/phytotherapy">
            <Phytotherapy />
          </Route>
          <Route exact path="/prices">
            <Prices />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/more-info">
            <MoreInfos />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}
