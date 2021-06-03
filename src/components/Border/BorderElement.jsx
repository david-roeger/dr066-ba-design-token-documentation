
import React from 'react';
import { CopyToClipBoard } from '../index'

export function BorderElement( { name, border }) {

return <div className="border">
        <div className="p-sm pb-0">
            <CopyToClipBoard text={name === "DEFAULT" ? "border" : name}>
                <div style={{borderWidth: border.value}} className={`border-black border-solid bg-enocean-300 h-2xl`}> </div>
            </CopyToClipBoard>
        </div>
        <div className="m-sm">
            <p> { name } </p>
            <p className="text-sm leading-sm text-gray-500"> { border.value } </p>
        </div>
    </div>
};