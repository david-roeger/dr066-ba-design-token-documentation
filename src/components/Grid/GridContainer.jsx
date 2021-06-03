
import React from 'react';
import { Container, GridElement } from '../index'

export function GridContainer( { grids } ) {
    console.log(grids);
    return <Container>
        <h2 className="text-xl mb-md">Grid</h2>
        <div className="grid md:grid-cols-sm gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            { Object.keys(grids).map((grid, index) => (
                <GridElement name={ grid } index={index} grid={ grids[grid] } key={ grid }></GridElement>
            ))}
        </div>
    </Container>
};