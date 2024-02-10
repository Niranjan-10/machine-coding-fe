import { useState } from "react";
import useTraverseTree from "./hooks/use-traverse-hook"
import Folder from "./components/folder";
import explorer from "./data/data";

export default function FileExplorer() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const updatedTree = insertNode(explorerData, folderId, item, isFolder)
    // const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(updatedTree);
  };

  const handleDeleteNode = (folderId) => {
    const updatedTree = deleteNode(explorer, folderId)
    setExplorerData(updatedTree);
  }

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} handleDeleteNode={handleDeleteNode} />
    </div>
  );
}
