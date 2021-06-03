import { Container, ColorContainer, FontContainer, SpacingContainer, GridContainer, BorderContainer, BreakPointContainer } from './Components/index'
import tokens from 'dr066-ba-design-token-builder/tokens'

let colors = tokens.colors;
let fonts = tokens.font;
let spacings = tokens.spacing;
let borders = tokens.borders;
let grids = tokens.grid;
let breakPoints = tokens.breakPoints;

/*
function App() {
  return (
    <div className="font-inter p-sm md:p-md lg:p-lg xl:pd-2xl">
      { Object.keys(tokens).map((token => {
        let t = tokens[token];
        console.log(t);
      }))}
      
    </div>
  )
}

export default App
*/


import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
        <ul>
            <li><Link to="/">Start</Link></li>
            <li><Link to="/color">Color</Link></li>
            <li><Link to="/font">Font</Link></li>
            <li><Link to="/spacing">Spacing</Link></li>
            <li><Link to="/border">Border</Link></li>
            <li><Link to="/grid">Grid</Link></li>
            <li><Link to="/breakpoint">Breakpoint</Link></li>
            <li><Link to="/overview">Overview</Link></li>
          </ul>
        </Container>

        <Switch>
          <div className="font-inter px-sm md:p-md lg:p-lg xl:p-2xl">
            <Route exact path="/" component={Index} />
            <Route path="/color" render={() => <ColorRoute />} />
            <Route path="/font" render={() => <FontRoute />} />
            <Route path="/spacing" render={() => <SpacingRoute />} />
            <Route path="/border" render={() => <BorderRoute />} />
            <Route path="/grid" render={() => <GridRoute />} />
            <Route path="/breakpoint" render={() => <BreakPointRoute />} />
            <Route path="/overview" render={() => <OverviewRoute />} />
          </div>
        </Switch>
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
  <BreakPointContainer breakPoints={breakPoints} vertical></BreakPointContainer>
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


