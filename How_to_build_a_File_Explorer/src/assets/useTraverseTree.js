export const useTraverseTree = () => {
    const insertNode = function (tree, folderId, itemName, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: Date.now(),
                name: itemName,
                isFolder,
                items: [],
            });
            return tree;
        }
        const updatedItems = tree.items.map((obj) => {
            return insertNode(obj, folderId, itemName, isFolder);
        });
        return { ...tree, items: updatedItems };
    };

    const deleteNode = (tree, nodeId) => {
        const filteredItems = tree.items
            .filter((item) => item.id !== nodeId)
            .map((item) => deleteNode(item, nodeId));
        return { ...tree, items: filteredItems };
    };

    const renameNode = (tree, nodeId, newName) => {
        if (tree.id === nodeId) {
            tree.name = newName;
            return tree;
        }
        const updatedItems = tree.items.map((obj) =>
            renameNode(obj, nodeId, newName)
        );
        return { ...tree, items: updatedItems };
    };

    return { insertNode, deleteNode, renameNode };
};
