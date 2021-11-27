import React, { useContext } from 'react'
import { marked } from 'marked'

import { AppContext } from '../AppContext'
import '../SCSS/preview.scss';

export default function Previewer() {
    const { contentState } = useContext(AppContext);
    const [content, setContent] = contentState;
    const showResult = () => {
        return
    }
    return (
        <section id="output">
            <div id="output-header">
                <h1>PREVIEW</h1>
            </div>
            <div id="preview"
                dangerouslySetInnerHTML={{ __html: marked(content) }}
            />
        </section>
    )
}
