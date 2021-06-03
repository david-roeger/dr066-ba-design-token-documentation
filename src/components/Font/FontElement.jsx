
import React from 'react';

export function FontElement( { name, font }) {
    let size = font.size.value;
    let family = font.family.value;

    return <div className="border p-sm">
        <p style={{fontSize: size, fontFamily: family}} className="bg-gray-100 focus:outline-none ring-black focus:ring p-sm" contentEditable> Lorem Ipsum</p>
        <p className="my-xs mt-sm">{ name } (text-{ name })</p>
        <p className="text-sm leading-sm text-gray-500"> 
            <span> { size } </span> | <span> { family } (font-{ family })</span> 
        </p>
    </div>
};