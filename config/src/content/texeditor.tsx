import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { FloppyDisk, ListBullets, ListNumbers, TextB, TextHOne, TextHTwo, TextItalic } from "@phosphor-icons/react";

// Componente de botão de estilo
const StyleButton = ({ onToggle, style, label, active }) => {
  return (
    <button
      className={`_btn center ${active ? "active" : ""}`}
      onMouseDown={(e) => { e.preventDefault(); onToggle(style); }}>
      {label}
    </button>
  );
};

const CustomEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [activeStyles, setActiveStyles] = useState([]);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onToggleInlineStyle = (style) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    const newState = RichUtils.toggleInlineStyle(editorState, style);

    setEditorState(newState);

    if (currentStyle.has(style)) {
      setActiveStyles(activeStyles.filter((s) => s !== style));
    } else {
      setActiveStyles([...activeStyles, style]);
    }
  };

  const onToggleBlockType = (blockType) => {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState);
    const newState = RichUtils.toggleBlockType(editorState, blockType);

    setEditorState(newState);

    if (currentBlockType === blockType) {
      setActiveStyles(activeStyles.filter((s) => s !== blockType));
    } else {
      setActiveStyles([...activeStyles, blockType]);
    }
  };

  return (
    <div className="_mark">
      <div className="_bar">
        <section className="tools">
          <StyleButton onToggle={onToggleBlockType} style="header-one" label={<TextHOne className="ico" />} active={activeStyles.includes("header-one")} />
          <StyleButton onToggle={onToggleBlockType} style="header-two" label={<TextHTwo className="ico" />} active={activeStyles.includes("header-two")} />
          <StyleButton onToggle={onToggleInlineStyle} style="BOLD" label={<TextB className="ico" />} active={activeStyles.includes("BOLD")} />
          <StyleButton onToggle={onToggleInlineStyle} style="ITALIC" label={<TextItalic className="ico" />} active={activeStyles.includes("ITALIC")} />
          <StyleButton onToggle={onToggleBlockType} style="unordered-list-item" label={<ListBullets className="ico" />} active={activeStyles.includes("unordered-list-item")} />
          <StyleButton onToggle={onToggleBlockType} style="ordered-list-item" label={<ListNumbers className="ico" />} active={activeStyles.includes("ordered-list-item")} />
          {/* <StyleButton onToggle={onToggleBlockType} style="blockquote" label={<Quotes className="ico" />} active={activeStyles.includes("blockquote")} /> */}
          {/* <button className="_btn center" onMouseDown={(e) => { e.preventDefault(); addHorizontalRule(); }}>
            <Minus className="ico" />
          </button>
          <button className="_btn center" onMouseDown={(e) => { e.preventDefault(); addTable(); }}>
            <Table className="ico" />
          </button>
          <button className="_btn center" onMouseDown={(e) => { e.preventDefault(); addLink(); }}>
            <Link className="ico" />
          </button> */}
        </section>
      </div>
      <Editor className="_editor" editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={setEditorState} />
    </div >
  );
};

export default CustomEditor;
