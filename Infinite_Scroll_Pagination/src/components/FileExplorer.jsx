import { useState } from "react";
import {
    Folder,
    FolderOpen,
    InsertDriveFile,
    Add,
    Delete,
    Edit,
} from "@mui/icons-material";
import {
    Box,
    IconButton,
    Typography,
    Collapse,
    TextField,
} from "@mui/material";

const FileExplorer = ({
    explorer,
    handleInsertNode,
    handleDeleteNode,
    handleRenameNode,
    searchTerm
}) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({ visible: false, isFolder: false });
    const [isRenaming, setIsRenaming] = useState(false);
    const [newName, setNewName] = useState(explorer.name);

    const normalizedSearch = (searchTerm || "").trim().toLowerCase();

    const match =
        normalizedSearch.length > 0 &&
        explorer.name.toLowerCase().includes(normalizedSearch);
        
    const highlightStyle = match ? { backgroundColor: "#ffe082" } : { backgroundColor: "" };

    const handleNew = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({ visible: true, isFolder });
    };

    const handleAddNode = (e) => {
        if (e.key === "Enter" && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({ visible: false });
        }
    };

    const handleRename = (e) => {
        if (e.key === "Enter") {
            handleRenameNode(explorer.id, newName);
            setIsRenaming(false);
        }
    };

    return (
        <Box sx={{ pl: 2, mt: 1 }}>
            {explorer.isFolder ? (
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setExpand(!expand)}
                    >
                        {expand ? <FolderOpen color="primary" /> : <Folder color="action" />}
                        {isRenaming ? (
                            <TextField
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                onKeyDown={handleRename}
                                size="small"
                                sx={{ ml: 1, width: "150px" }}
                                autoFocus
                            />
                        ) : (
                            <Typography sx={{ ml: 1, ...highlightStyle }}>
                                {explorer.name}
                            </Typography>
                        )}

                        <IconButton size="small" onClick={(e) => handleNew(e, true)}>
                            <Add fontSize="inherit" />
                        </IconButton>
                        <IconButton size="small" onClick={(e) => handleNew(e, false)}>
                            <InsertDriveFile fontSize="inherit" />
                        </IconButton>
                        <IconButton size="small" onClick={() => setIsRenaming(true)}>
                            <Edit fontSize="inherit" />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleDeleteNode(explorer.id)}>
                            <Delete fontSize="inherit" />
                        </IconButton>
                    </Box>

                    <Collapse in={expand} timeout="auto" unmountOnExit>
                        {showInput.visible && (
                            <Box sx={{ display: "flex", pl: 4, mt: 0.5 }}>
                                {showInput.isFolder ? <Folder color="disabled" /> : <InsertDriveFile color="disabled" />}
                                <input
                                    autoFocus
                                    type="text"
                                    onKeyDown={handleAddNode}
                                    onBlur={() => setShowInput({ visible: false })}
                                    style={{ marginLeft: 8, fontSize: 14 }}
                                />
                            </Box>
                        )}
                        {explorer.items.map((exp) => (
                            <FileExplorer
                                key={exp.id}
                                explorer={exp}
                                handleInsertNode={handleInsertNode}
                                handleDeleteNode={handleDeleteNode}
                                handleRenameNode={handleRenameNode}
                                searchTerm={searchTerm}
                            />
                        ))}
                    </Collapse>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" sx={{ pl: 4 }}>
                    <InsertDriveFile fontSize="small" color="action" />
                    {isRenaming ? (
                        <TextField
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onKeyDown={handleRename}
                            size="small"
                            sx={{ ml: 1, width: "150px" }}
                            autoFocus
                        />
                    ) : (
                        <Typography sx={{ ml: 1, ...highlightStyle }}>
                            {explorer.name}
                        </Typography>
                    )}
                    <IconButton size="small" onClick={() => setIsRenaming(true)}>
                        <Edit fontSize="inherit" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDeleteNode(explorer.id)}>
                        <Delete fontSize="inherit" />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default FileExplorer;
