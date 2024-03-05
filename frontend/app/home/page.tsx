import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Navbar } from "./_components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Notes</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>IDE</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Whiteboard</ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};
export default HomePage;
