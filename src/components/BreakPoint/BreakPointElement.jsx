
import React from 'react';
import { CopyToClipBoard } from '../index'

export function BreakPointElement( { name, breakPoint }) {

return <div className="border">
        <CopyToClipBoard text={name}>
            <div style={{width: breakPoint.value}} className="bg-enocean-300 h-[400px]"> </div>
        </CopyToClipBoard>
        <div className="m-sm">
            <p> { name } </p>
            <p className="text-sm leading-sm text-gray-500"> { breakPoint.value } </p>
        </div>
    </div>
};