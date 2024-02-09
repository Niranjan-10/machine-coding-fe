import React from 'react'
import explorer from './data'
import ExplorerCard from './explorer-card'
import useTraverseTree from './hooks/use-traverse-hook'

const FileExplorer = (props) => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div style={{backgroundColor: '#ccc'}}>
        <ExplorerCard file={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  )  
}

export default FileExplorer