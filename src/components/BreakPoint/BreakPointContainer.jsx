
import React from 'react';
import { Container, Description, BreakPointElement } from '../index'

export function BreakPointContainer( { description, breakPoints, vertical } ) {

    return <Container overflow>
        <h2 className="text-xl mb-sm">Breakpoint</h2>
        { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
        <div className={`flex ${vertical ? "flex-col": "flex-row"} gap-sm md:gap-md lg:gap-lg xl:gap-xl w-full overflow-auto pb-md`}>
            { Object.keys(breakPoints).map(breakPoint => (
                <BreakPointElement name={ breakPoint } breakPoint={ breakPoints[breakPoint] } key={ breakPoint }></BreakPointElement>
            ))}
        </div>
    </Container>
};

BreakPointContainer.defaultProps = {
    description: true
};  