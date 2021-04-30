import React from "react";
import PropTypes from "prop-types";
import { Button, Header, Separator } from "./controls.styles";
import {
  TextBolder,
  TextItalic,
  TextStrikethrough,
  CodeSimple,
  Code,
  Quotes,
  ListBullets,
  ListNumbers,
} from "phosphor-react";

/**
 * @typedef {import('@tiptap/react').Editor} Editor
 * @param {{ editor: Editor }} props
 * @returns
 */
const Controls = ({ editor }) => {
  return (
    editor && (
      <Header>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <TextBolder size={32} weight="bold" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <TextItalic size={32} weight="bold" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
        >
          <TextStrikethrough size={32} weight="bold" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
        >
          <CodeSimple size={32} weight="bold" />
        </Button>

        <Separator />

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
        >
          <ListBullets size={32} weight="bold" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
        >
          <ListNumbers size={32} weight="bold" />
        </Button>

        <Separator />

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
        >
          <Code size={32} weight="bold" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
        >
          <Quotes size={32} weight="bold" />
        </Button>
      </Header>
    )
  );
};

Controls.propTypes = {
  editor: PropTypes.object.isRequired,
};

export { Controls };
