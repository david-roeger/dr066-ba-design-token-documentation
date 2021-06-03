import React, { useState } from 'react'
import { ColorContainer, FontContainer } from './components/index'
import tokens from 'dr066-ba-design-token-builder/tokens'

let colors = tokens.colors;
let font = tokens.font;
let spacing = tokens.spacing;
let borders = tokens.borders;
let breakpoints = tokens.breakPoints;
let grid = tokens.grid;

function App() {
  console.log(tokens);
  return (
    <div className="font-inter p-sm md:p-md lg:p-lg xl:pd-xl">
      <p>hello World</p>
      { Object.keys(tokens).map((token => {
        console.log(token);
        let t = tokens[token];
        console.log(t);
      }))}
      <ColorContainer colors={colors}></ColorContainer>
      <FontContainer fonts={font}></FontContainer>
    </div>
  )
}

export default App
