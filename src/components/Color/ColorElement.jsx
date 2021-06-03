
import React from 'react';

export function ColorElement( { name, color }) {

    function RGBToHex(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);
        
        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);
        
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        
        return "#" + r + g + b;
        }

    return <div className="border">
        <div style={{ backgroundColor: color.value, aspectRatio: '1 / 1'}}></div>
        <p className="mx-sm my-xs mt-sm"> { name } </p>
        <p className="mx-sm my-xs mb-sm text-sm leading-sm text-gray-500"> { RGBToHex(color.value) } </p>
    </div>
};

var colorcode = "rgba(0, 0, 0, 0.74)";