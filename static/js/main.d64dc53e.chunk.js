(this["webpackJsonpmarkdown-preview"]=this["webpackJsonpmarkdown-preview"]||[]).push([[0],[,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(1),r=t(5),c=t.n(r),o=t(4),s=t(2),a=t(0),d=Object(i.createContext)(),l=function(e){var n=Object(i.useState)("# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"),t=Object(s.a)(n,2),r={contentState:[t[0],t[1]]};return Object(a.jsx)(d.Provider,{value:r,children:e.children})};t(11);function h(){var e=Object(i.useContext)(d).contentState,n=Object(s.a)(e,2),t=n[0],r=n[1];return Object(a.jsxs)("section",{id:"input",children:[Object(a.jsx)("div",{id:"input-header",children:Object(a.jsx)("h1",{children:"EDITOR"})}),Object(a.jsx)("textarea",{id:"editor",name:"",cols:"60",rows:"20",onChange:function(e){r(e.target.value)},children:t})]})}t(12);function j(){var e=Object(i.useContext)(d).contentState,n=Object(s.a)(e,2),t=n[0];n[1];return Object(a.jsxs)("section",{id:"output",children:[Object(a.jsx)("div",{id:"output-header",children:Object(a.jsx)("h1",{children:"PREVIEW"})}),Object(a.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:Object(o.marked)(t)}})]})}t(13);function u(){return Object(a.jsxs)("section",{id:"main",children:[Object(a.jsxs)("section",{id:"title",children:[Object(a.jsx)("h1",{children:"MARKDOWN PREVIEWER"}),Object(a.jsx)("h4",{children:"FCC frontend library project"})]}),Object(a.jsxs)("section",{id:"app",children:[Object(a.jsx)(h,{}),Object(a.jsx)(j,{})]}),Object(a.jsx)("section",{id:"author",children:"coded by Minh Phan"})]})}c.a.render(Object(a.jsx)(l,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.d64dc53e.chunk.js.map