
import React from 'react';
import { Container, BorderElement } from '../index'

export function BorderContainer( { borders } ) {
    console.log(borders);
    return <Container>
        <h2 className="text-xl mb-md">Border</h2>
        <div className="grid md:grid-cols-sm gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            { Object.keys(borders).map((border) => (
                <BorderElement name={ border } border={ borders[border] } key={ border }></BorderElement>
            ))}
        </div>
    </Container>
};