
import React from 'react';
import { Container, FontElement } from '../index'

export function FontContainer( { fonts } ) {

    return <Container>
        <h2 className="text-xl mb-md">Typographie</h2>
        <div className="grid 
            grid-cols-sm gap-sm 
            md:grid-cols-md md:gap-md 
            lg:grid-cols-lg lg:gap-lg
            xl:grid-cols-xl xl:gap-xl">
            { Object.keys(fonts).map(font => (
                <FontElement name={ font } font={ fonts[font] } key={ font }></FontElement>
            ))}
        </div>
    </Container>
};