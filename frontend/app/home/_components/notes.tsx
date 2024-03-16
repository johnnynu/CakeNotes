"use client";
import React, { useRef, useEffect } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "prosemirror-schema-basic";
import { undo, redo, history } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { MenuItem, Dropdown, DropdownSubmenu, menuBar } from "prosemirror-menu";

const Notes = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Only proceed if the editorRef is current
    if (!editorRef.current) return;

    // Initialize the editor state with the schema and plugins
    const state = EditorState.create({
      schema,
      plugins: [history(), keymap({ "Mod-z": undo, "Mod-y": redo })],
    });

    // Initialize the editor view and attach it to the editorRef DOM element
    const view = new EditorView(editorRef.current, {
      state,
      dispatchTransaction(transaction) {
        let newState = view.state.apply(transaction);
        view.updateState(newState);
      },
    });

    // Cleanup function to destroy the editor view when the component is unmounted or re-rendered
    return () => {
      view.destroy();
    };
  }, []); // The empty dependency array ensures this effect only runs once on mount

  return (
    <div className="flex flex-col h-screen">
      {" "}
      {/* Use flex column and full screen height */}
      <div>
        {" "}
        {/* Header or other components can go here */}
        {/* Your header content */}
      </div>
      <div
        ref={editorRef}
        className="flex-grow" // This allows the editor to grow and fill the available space
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          overflow: "auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <div>
        {" "}
        {/* Footer or other components can go here */}
        {/* Your footer content */}
      </div>
    </div>
  );
};

export default Notes;
