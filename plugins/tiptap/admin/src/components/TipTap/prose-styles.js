import { css } from "styled-components";

export const ProseStyles = css`
  .ProseMirror {
    padding: 1rem;
    width: 100%;
    min-height: 320px;
    cursor: text;

    :focus {
      outline: none;
    }

    p {
      margin: 1rem 0;
      line-height: 1.5;
    }

    h1, h2, h3, h4 {
      margin: 2rem;
    }

    blockquote {
      padding: 1rem;
      font-size: 1.5rem;
      font-style: italic;
    }

    p > code {
      background-color: rgba(0, 0, 0, .12);
    }

    pre {
      padding: 1rem;
      background-color: rgba(0, 0, 0, .12);
      border-radius: 0.25rem;
    }
  }
`