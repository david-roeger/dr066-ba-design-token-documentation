
import React from 'react';
import { CopyToClipBoard } from '../home'

export function SpacingElement( { name, spacing }) {

    return <div className="border flex flex-col justify-between">
            <div className="flex-grow">
                <CopyToClipBoard full text={name}>
                        <div style={{height: spacing.value}} className="bg-zwave-300"></div>
                </CopyToClipBoard>
            </div>

        <div className="m-sm">
            <p> { name } </p>
            <p className="text-sm leading-sm text-gray-500"> { spacing.value } </p>
        </div>
    </div>
};