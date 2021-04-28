import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useEditor, EditorContent } from '@tiptap/react'
import { defaultExtensions } from '@tiptap/starter-kit'
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid rgb(243, 244, 244);
  border-radius: 0.25rem;
  font-size: 13px;
  box-shadow: rgb(104 118 142 / 5%) 0px 1px 1px;
  background-color: rgb(255, 255, 255);
  position: relative;
  line-height: 18px !important;

  :focus-within {
    border-color: rgb(120, 202, 255);
  }

  .ProseMirror {
    padding: 1rem;
    width: 100%;
    min-height: 320px;
    cursor: text;

    :focus {
      outline: none;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  const [isEditing, setIsEditing] = useState(false)

  const tiptap = useEditor({
    extensions: defaultExtensions(),
    onUpdate: ({ editor }) => {
      setIsEditing(true)

      onChange({
        target: {
          name,
          value: JSON.stringify(editor.getJSON())
        }
      })
    }
  })

  useEffect(() => {
    if(isEditing) return
    if(!tiptap) return

    tiptap.commands.setContent(JSON.parse(value))
  }, [value])

  return (
    <Wrapper>
      <EditorContent editor={tiptap}/>
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
