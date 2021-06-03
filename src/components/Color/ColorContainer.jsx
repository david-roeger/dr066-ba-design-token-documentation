
import React from 'react';
import { Container, ColorElement } from '../index'

export function ColorContainer( { colors } ) {
    return <Container>
        <h2 className="text-xl mb-md">Color</h2>
        <div className="grid 
            grid-cols-sm gap-sm 
            md:grid-cols-md md:gap-md 
            lg:grid-cols-lg lg:gap-lg
            xl:grid-cols-xl xl:gap-xl">
        { Object.keys(colors).map(color => (
            <ColorElement name={ color } color={ colors[color] } key={ color }></ColorElement>
        ))}
        </div>
    </Container>
};