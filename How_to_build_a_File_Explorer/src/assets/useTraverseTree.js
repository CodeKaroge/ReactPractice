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
    return { insertNode };
};
