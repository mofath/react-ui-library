
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';  // require only the core library
import javascript from 'highlight.js/lib/languages/javascript';
import "./vs2015.css"

hljs.registerLanguage('javascript', javascript);

const CodeExample = ({ code }) => {
    const [highlightedCode, setHighlightedCode] = useState(code);

    useEffect(() => {
        setHighlightedCode(hljs.highlightAuto(code).value)
    }, [code]);

    return (
        <pre className="hljs" >
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    )
}

CodeExample.propTypes = {
    code: PropTypes.string.isRequired
}

export default CodeExample;