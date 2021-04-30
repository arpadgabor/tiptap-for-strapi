import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-height: 100vh;
  overflow: auto;

  border: 1px solid rgb(243, 244, 244);
  border-radius: 0.25rem;

  font-size: 13px;
  line-height: 18px !important;

  background-color: rgb(255, 255, 255);
  box-shadow: rgb(104 118 142 / 5%) 0px 1px 1px;

  :focus-within {
    border-color: rgb(120, 202, 255);
  }

  .ProseMirror {
    padding: 1rem;
    width: 100%;
    min-height: 320px;
    max-height: 100vh;
    cursor: text;

    :focus {
      outline: none;
    }

    p {
      margin: 1rem 0;
      line-height: 1.5;
    }

    h1, h2, h3, h4 {
      margin: 2rem 0;
    }

    ul, ol {
      padding-left: 2rem;
    }

    blockquote {
      padding: 1rem;
      font-size: 1.5rem;
      margin: 2rem 0;
      font-style: italic;
      background-color: rgba(0, 0, 0, .05);
      border-radius: 0.25rem;

      p:first-of-type {
        margin-top: 0 !important;
      }
      p:last-of-type {
        margin-bottom: 0 !important;
      }
    }

    p > code {
      background-color: rgba(0, 0, 0, .10);
      color: black;
      padding: 0.25rem;
    }

    pre {
      padding: 1rem;
      background-color: rgba(0, 0, 0, .10);
      margin: 2rem 0;
      border-radius: 0.25rem;
    }
  }
`;