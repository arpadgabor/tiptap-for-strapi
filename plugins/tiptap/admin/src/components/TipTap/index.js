import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useEditor, EditorContent } from "@tiptap/react";
import { defaultExtensions } from "@tiptap/starter-kit";

import { Wrapper } from './editor.styles'
import { Controls } from "./controls";



const Editor = ({ onChange, name, value }) => {
  const [isEditing, setIsEditing] = useState(false);

  const tiptap = useEditor({
    extensions: defaultExtensions(),
    onUpdate: ({ editor }) => {
      setIsEditing(true);

      onChange({
        target: {
          name,
          value: editor.getHTML(),
        },
      });
    },
  });

  useEffect(() => {
    if (isEditing) return;
    if (!tiptap) return;

    tiptap.commands.setContent(value);
  }, [value]);

  return (
    <Wrapper>
      <Controls editor={tiptap} />
      <EditorContent editor={tiptap} />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
