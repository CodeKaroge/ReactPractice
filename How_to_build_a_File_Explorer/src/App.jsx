import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import { useTraverseTree } from "./assets/useTraverseTree";
import { explorerData } from "./assets/explorerData";

function App() {
  const [explorer, setExplorer] = useState(explorerData);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalTree = insertNode(explorer, folderId, itemName, isFolder);
    setExplorer({ ...finalTree });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📁 File Explorer</h2>
      <FileExplorer explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
