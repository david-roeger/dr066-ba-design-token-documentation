
import React from 'react';
import { Container, BreakPointElement } from '../index'

export function BreakPointContainer( { breakPoints } ) {

    return <Container overflow>
        <h2 className="text-xl mb-md">BreakPoints</h2>
        <div className="flex gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            { Object.keys(breakPoints).map(breakPoint => (
                <BreakPointElement name={ breakPoint } breakPoint={ breakPoints[breakPoint] } key={ breakPoint }></BreakPointElement>
            ))}
        </div>
    </Container>
};