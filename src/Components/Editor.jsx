import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import '../SCSS/editor.scss';

export default function Editor() {

    const { contentState } = useContext(AppContext);

    const [content, setContent] = contentState;

    const handleChange = e => {
        setContent(e.target.value);
    }

    return (
        <section id="input">
            <div id="input-header">
                <h1>EDITOR</h1>
            </div>
            <textarea id="editor" name="" cols="60" rows="20" onChange={handleChange}>
                {content}
            </textarea>
        </section>
    )
}
