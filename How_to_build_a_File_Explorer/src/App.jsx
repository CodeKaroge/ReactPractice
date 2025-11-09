import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import { explorerData } from "./assets/explorerData";
import SearchBar from "./components/SearchBar";
import { useTraverseTree } from "./assets/useTraverseTree";

function App() {
  const { insertNode, deleteNode, renameNode } = useTraverseTree();
  const [explorer, setExplorer] = useState(explorerData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalTree = insertNode(explorer, folderId, itemName, isFolder);
    setExplorer({ ...finalTree });
  }; 

  const handleDeleteNode = (nodeId) => {
    const finalTree = deleteNode(explorer, nodeId);
    setExplorer({ ...finalTree });
  };

  const handleRenameNode = (nodeId, newName) => {
    const finalTree = renameNode(explorer, nodeId, newName);
    setExplorer({ ...finalTree });
  };

  return (
    <div style={{ padding: 20, width: 400 }}>
      <h2>📁 File Explorer</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FileExplorer
        explorer={explorer}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleRenameNode={handleRenameNode}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
