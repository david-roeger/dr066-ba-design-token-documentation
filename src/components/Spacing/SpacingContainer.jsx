
import React from 'react';
import { Container, SpacingElement } from '../index'

export function SpacingContainer( { spacings } ) {

    return <Container>
        <h2 className="text-xl mb-md">Spacing</h2>
        <div className="grid
            grid-cols-sm gap-sm 
            md:grid-cols-md md:gap-md 
            lg:gap-lg xl:gap-xl">
            { Object.keys(spacings).map(spacing => (
                <SpacingElement name={ spacing } spacing={ spacings[spacing] } key={ spacing }></SpacingElement>
            ))}
        </div>
    </Container>
};