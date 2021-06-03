import React, { useState } from 'react'
import { ColorContainer, FontContainer, SpacingContainer, GridContainer, BorderContainer, BreakPointContainer } from './components/index'
import tokens from 'dr066-ba-design-token-builder/tokens'

let colors = tokens.colors;
let fonts = tokens.font;
let spacings = tokens.spacing;
let borders = tokens.borders;
let grids = tokens.grid;
let breakPoints = tokens.breakPoints;

function App() {
  console.log(tokens);
  return (
    <div className="font-inter p-sm md:p-md lg:p-lg xl:pd-2xl">
      { Object.keys(tokens).map((token => {
        console.log(token);
        let t = tokens[token];
        console.log(t);
      }))}
      <ColorContainer colors={colors}></ColorContainer>
      <FontContainer fonts={fonts}></FontContainer>
      <SpacingContainer spacings={spacings}></SpacingContainer>
      <BorderContainer borders={borders}></BorderContainer>
      <GridContainer grids={grids}></GridContainer>
      <BreakPointContainer breakPoints={breakPoints}></BreakPointContainer>
    </div>
  )
}

export default App
