"use client";
import Header from "./Header";
import { EditorContainer } from "./EditorContainer";

export default function Editorbox({ fileName, setFileName }) {
  return (
    <div className="w-full h-full">
      <Header fileName={fileName} setFileName={setFileName} />
      <EditorContainer key={fileName} fileExt={fileName} />
    </div>
  );
}
