import React, { useRef, useEffect, useState } from "react";
import { atom, useAtom } from "jotai";
import Quill from "quill";
import { ImageDrop } from "quill-image-drop-module";
import MagicUrl from "quill-magic-url";
import "quill/dist/quill.snow.css"; // ES6

const isEditorReadyAtom = atom(false);

const Notes = () => {
  const [isEditorReady, setIsEditorReady] = useAtom(isEditorReadyAtom);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<Quill | null>(null);

  Quill.register("modules/imageDrop", ImageDrop);
  Quill.register("modules/magicUrl", MagicUrl);

  useEffect(() => {
    if (editorRef.current && quillInstance.current === null) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }], // heading size
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ script: "sub" }, { script: "super" }],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            [{ color: [] }, { background: [] }],
            ["clean"],
          ],
          imageDrop: true,
          magicUrl: true,
        },
      });
      setIsEditorReady(true);
    }
  });

  return (
    <div
      ref={editorRef}
      style={{ display: isEditorReady ? "block" : "none" }}
    />
  );
};
export default Notes;
