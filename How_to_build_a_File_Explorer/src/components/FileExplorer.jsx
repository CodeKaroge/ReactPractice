import { useState } from "react";
import { Folder, FolderOpen, InsertDriveFile, Add } from "@mui/icons-material";
import { Box, IconButton, Typography, Collapse } from "@mui/material";

const FileExplorer = ({ explorer, handleInsertNode }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({ visible: false, isFolder: false });

    const handleNew = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({ visible: true, isFolder });
    };

    const handleAddNode = (e) => {
        if (e.key === "Enter" && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({ ...showInput, visible: false });
        }
    }

    return (
        <Box sx={{ pl: 2, mt: 1 }}>
            {explorer.isFolder ? (
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        onClick={() => setExpand(!expand)}
                        sx={{ cursor: "pointer" }}
                    >
                        {expand ? <FolderOpen color="primary" /> : <Folder color="action" />}
                        <Typography sx={{ ml: 1 }}>{explorer.name}</Typography>
                        <IconButton size="small" onClick={(e) => handleNew(e, true)}>
                            <Add fontSize="inherit" />
                        </IconButton>
                        <IconButton size="small" onClick={(e) => handleNew(e, false)}>
                            <InsertDriveFile fontSize="inherit" />
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
                                    onBlur={() => setShowInput({ ...showInput, visible: false })}
                                    style={{ marginLeft: 8, fontSize: 14 }}
                                />
                            </Box>
                        )}
                        {explorer.items.map((exp) => (
                            <FileExplorer key={exp.id} explorer={exp} handleInsertNode={handleInsertNode} />
                        ))}
                    </Collapse>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" sx={{ pl: 4 }}>
                    <InsertDriveFile fontSize="small" color="action" />
                    <Typography sx={{ ml: 1 }}>{explorer.name}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default FileExplorer;
