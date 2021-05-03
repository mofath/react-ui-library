
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

const CodeExample = (props) => {

    const elementRef = useRef(null)
    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightBlock(elementRef);
    }, [])

    return (
        <pre ref={elementRef}>
            <code>
                {props.children}
            </code>
        </pre>
    )
}

CodeExample.propTypes = {
    children: PropTypes.string.isRequired
}

export default CodeExample;