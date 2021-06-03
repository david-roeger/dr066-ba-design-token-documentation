
import React from 'react';
import { Container, Description, GridElement } from '../home'

export function GridContainer( { description, grids } ) {

return <Container>
        <h2 className="text-xl mb-sm">Grid</h2>
        { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
        <div className="grid md:grid-cols-sm gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            { Object.keys(grids).map((grid, index) => (
                <GridElement name={ grid } index={index} grid={ grids[grid] } key={ grid }></GridElement>
            ))}
        </div>
    </Container>
};

GridContainer.defaultProps = {
    description: true
};  