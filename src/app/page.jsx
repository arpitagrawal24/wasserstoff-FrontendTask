"use client";
import { useState } from "react";
import Editorbox from "@/components/Editorbox";
import Folder from "@/components/Folder";
import useTraverseTree from "@/hooks/use-traverse-tree";
import explorer from "@/data/folderdata";

export default function Home() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [fileName, setFileName] = useState("Explorer");

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleAddFileName = (name) => {
    setFileName(name);
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row h-screen">
        <div className="bg-[#11212d] lg:flex-2 border border-gray-700 px-5 lg:px-5 flex-shrink-0 lg:w-1/5 w-full lg:h-full overflow-auto">
          <Folder
            handleInsertNode={handleInsertNode}
            explorer={explorerData}
            handleAddFileName={handleAddFileName}
          />
        </div>
        <div className="bg-[#253745] lg:flex-1 w-full h-full overflow-auto p-4">
          <Editorbox fileName={fileName} />
        </div>
      </div>
    </>
  );
}
