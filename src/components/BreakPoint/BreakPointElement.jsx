
import React from 'react';
import { CopyToClipBoard, Container } from '../index'

export function BreakPointElement( { name, breakPoint, computed , index}) {

    return <div className="absolute w-full pointer-events-none">
        <Container alignedTop>
            <div style={{width: `${computed}%`}} className="border bg-white pointer-events-auto">
                <CopyToClipBoard text={name}>
                    <div style={{ height: `${320 - 58 * index}px`}} className="bg-pink-300"> </div>
                </CopyToClipBoard>
                <div className="m-sm">
                    <p> { name } </p>
                    <p className="text-sm leading-sm text-gray-500"> { breakPoint.value }</p>
                </div>
            </div>
        </Container>
    </div>
};