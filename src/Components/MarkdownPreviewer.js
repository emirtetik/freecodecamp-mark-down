import React, { useState } from 'react';
import {marked} from 'marked';
import "../styles/style.css";
import { FaFreeCodeCamp } from "react-icons/fa";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownPreview = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-12">
          <h2>Editor</h2>
          <div className="toolbar">
            <h1 ><FaFreeCodeCamp />Editor</h1>
          </div>
          <textarea id="editor" value={markdown} onChange={handleInputChange} />
        </div>
        <div className="col-md-12">
          <h2>Preview</h2>
          <div className="toolbar">
            <h1 ><FaFreeCodeCamp />Preview</h1>
          </div>
          <div id="preview" dangerouslySetInnerHTML={getMarkdownPreview()} />
        </div>
      </div>
    </div>
  );
};

const defaultMarkdown = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
[Link](https://www.freecodecamp.org/)

\`inline code\`

\`\`\`
// Code Block
function greet() {
  return 'Hello, World!';
}

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

> Blockquote

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ----------- | ------------ | --------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

**Bold Text**

![Image](https://vetores.org/d/freecodecamp.svg)`;

export default MarkdownPreviewer;
