
import React from 'react';
import { Container, FontElement } from '../index'

export function FontContainer( { fonts } ) {

    return <Container>
        <h2 className="text-xl mb-md">Typographie</h2>
        <div className="grid gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            { Object.keys(fonts).map(font => (
                <FontElement name={ font } font={ fonts[font] } key={ font }></FontElement>
            ))}
        </div>
    </Container>
};