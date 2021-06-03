
import React, { useState } from 'react';

export function CopyToClipBoard( { text, full, children } ) {
    const [success, setSuccess] = useState(false);

    function copy() {
        console.log(text + " copy")
        navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!');
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);   
            }, 500);
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    }
    return <div className={`cursor-pointer ${full ? 'h-full' : ''}`} onClick={copy}>
        <div className={`${success ? 'animate-pulse-fast' : ''} bg-gray-100`}>
            { children }
        </div>
    </div>
};

CopyToClipBoard.defaultProps = {
    text: '',
    full: false,
};  