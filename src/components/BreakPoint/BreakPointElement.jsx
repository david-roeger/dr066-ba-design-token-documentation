
import React from 'react';
import { CopyToClipBoard } from '../index'

export function BreakPointElement( { name, breakPoint }) {

return <div className="border">
        <CopyToClipBoard text={name}>
            <div style={{width: breakPoint.value}} className="bg-pink-300 h-[140px]"> </div>
        </CopyToClipBoard>
        <div className="m-sm">
            <p> { name } </p>
            <p className="text-sm leading-sm text-gray-500"> { breakPoint.value } </p>
        </div>
    </div>
};