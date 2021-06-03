
import React from 'react';

export function Container( { overflow, children } ) {
    return <div className={`container mx-auto py-xl ${overflow? 'overflow-y-auto' : ''}`}>
       { children }
    </div>
};

