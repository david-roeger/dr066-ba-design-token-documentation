import { Nav, ColorContainer, FontContainer, SpacingContainer, GridContainer, BorderContainer, BreakPointContainer } from './Components/index'
import tokens from 'dr066-ba-design-token-builder/tokens'

let colors = tokens.colors;
let fonts = tokens.font;
let spacings = tokens.spacing;
let borders = tokens.borders;
let grids = tokens.grid;
let breakPoints = tokens.breakPoints;


import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <div className="font-inter px-sm md:p-md lg:p-lg xl:p-2xl">
          <Nav></Nav>
          <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/color" render={() => <ColorRoute />} />
              <Route path="/font" render={() => <FontRoute />} />
              <Route path="/spacing" render={() => <SpacingRoute />} />
              <Route path="/border" render={() => <BorderRoute />} />
              <Route path="/grid" render={() => <GridRoute />} />
              <Route path="/breakpoint" render={() => <BreakPointRoute />} />
              <Route path="/overview" render={() => <OverviewRoute />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const Index = () => (
  <div>
    Hallo
  </div>
)
const ColorRoute = () => (
    <ColorContainer colors={colors}></ColorContainer> 
)

const FontRoute = () => (
  <FontContainer fonts={fonts}></FontContainer>
)

const SpacingRoute = () => (
  <SpacingContainer spacings={spacings}></SpacingContainer>
)

const BorderRoute = () => (
  <BorderContainer borders={borders}></BorderContainer>
)

const GridRoute = () => (
  <GridContainer grids={grids}></GridContainer>
)

const BreakPointRoute = () => (
  <BreakPointContainer vertical breakPoints={breakPoints}></BreakPointContainer>
)

const OverviewRoute = () => (
  <div>
      <ColorContainer colors={colors}></ColorContainer>
      <FontContainer fonts={fonts}></FontContainer>
      <SpacingContainer spacings={spacings}></SpacingContainer>
      <BorderContainer borders={borders}></BorderContainer>
      <GridContainer grids={grids}></GridContainer>
      <BreakPointContainer breakPoints={breakPoints}></BreakPointContainer>
  </div>
)

export default App


