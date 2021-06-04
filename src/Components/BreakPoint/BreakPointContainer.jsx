
import React from 'react';
import { Container, Description, BreakPointElement } from '../index'

export function BreakPointContainer( { description, breakPoints, vertical } ) {

    let breakPointValueMap = Object.keys(breakPoints).map(breakPoint => {
        return getComputed(breakPoints[breakPoint]);
    });


    breakPointValueMap.reverse();
    breakPointValueMap.push(0);

    let breakPointPercentMap = breakPointValueMap.map((value, index) => {
        let p = 100;
        let first = breakPointValueMap[0]
        if(value !== first) {
            p = 100 / first * value
        };
        return p
    })

    function getComputed( { value }) {
        return parseInt(value.substring(0, value.length - 2));
    }

    return <div>
        <Container alignedBottom>
        <h2 className="text-xl leading-xl mb-sm">Breakpoint</h2>
        { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
            </Container>
        <div className={`block w-full`}>
            { Object.keys(breakPoints).reverse().map((breakPoint, index) => (
                <BreakPointElement 
                    name={ breakPoint } 
                    breakPoint={ breakPoints[breakPoint] } 
                    computed={breakPointPercentMap[index]} 
                    index={index} key={ breakPoint }></BreakPointElement>
            ))}
        </div>
    </div>
};

BreakPointContainer.defaultProps = {
    description: true
};  