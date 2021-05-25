

import React from 'react';

export function Light({state}) {
    state = Math.max(0, state);
    state = Math.min(state, 100);
    state = (state / 100).toFixed(2)
    return <div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-700" d="M27 23.7479C30.0281 21.5695 32 18.0151 32 14C32 7.37258 26.6274 2 20 2C13.3726 2 8 7.37258 8 14C8 18.0151 9.97186 21.5695 13 23.7479V27C13 29.2091 14.7909 31 17 31H23C25.2091 31 27 29.2091 27 27V23.7479Z"/>
            <path className="fill-current text-gray-700" d="M15 34C15 33.4477 15.4477 33 16 33H24C24.5523 33 25 33.4477 25 34C25 34.5523 24.5523 35 24 35H16C15.4477 35 15 34.5523 15 34Z"/>
            <path className="fill-current text-gray-700" d="M18 36C17.4477 36 17 36.4477 17 37C17 37.5523 17.4477 38 18 38H22C22.5523 38 23 37.5523 23 37C23 36.4477 22.5523 36 22 36H18Z" fill="#3A3A3A"/>
            <path className="fill-current text-white" d="M25 22.6622C27.989 20.9331 30 17.7014 30 14C30 8.47715 25.5228 4 20 4C14.4772 4 10 8.47715 10 14C10 17.7014 12.011 20.9331 15 22.6622V27C15 28.1046 15.8954 29 17 29H23C24.1046 29 25 28.1046 25 27V22.6622Z"/>
            <path style={{opacity: state}} className="fill-current text-yellow-500" d="M25 22.6622C27.989 20.9331 30 17.7014 30 14C30 8.47715 25.5228 4 20 4C14.4772 4 10 8.47715 10 14C10 17.7014 12.011 20.9331 15 22.6622V27C15 28.1046 15.8954 29 17 29H23C24.1046 29 25 28.1046 25 27V22.6622Z"/>
        </svg>
    </div>
};