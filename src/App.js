import React from 'react'
import { marked } from 'marked'
import Editor from './Components/Editor'
import Previewer from './Components/Previewer'
import "./SCSS/main.scss";
export default function App() {

    return (
        <section id="main">
            <section id="title">
                <h1>MARKDOWN PREVIEWER</h1>
                <h4>FCC frontend library project</h4>
            </section>
            <section id="app">
                <Editor />
                <Previewer />
            </section>
            <section id="author">coded by Minh Phan</section>
        </section>
    )
}
