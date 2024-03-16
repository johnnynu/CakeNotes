"use client";
import React from "react";
import Notes from "./_components/notes";
import CodeEditor from "./_components/codeEditor";
import Whiteboard from "./_components/whiteboard";
import { Navbar } from "./_components/navbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "60px" }}></div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={20}>
          <Notes />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={30}>
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30} minSize={20}>
          <Whiteboard />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};
export default HomePage;
