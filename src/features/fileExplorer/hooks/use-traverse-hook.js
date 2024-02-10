import React from 'react';

// const useTraverseTree = () => {
//     // Add a file or folder in tree
//     // Can be optimised using Dynamic Programming
//     const insertNode = function(tree, id, item, isFolder) {
//       if(tree.id===id && tree.isFolder) {
//         tree.items.unshift({
//           id: new Date().getTime(),
//           isFolder: isFolder,
//           name: item,
//           items: []
//         })

//         return tree;
//       }

//       let latestNode = [];
//       latestNode = tree.items.map((obj) => {
//         return insertNode(obj, id, item, isFolder)
//       })

//       return {...tree, items: latestNode}
//     }
  
//     const deleteNode = () => {}; // Do it Yourself
  
//     const renameNode = () => {}; // Do it Yourself
  
//     return { insertNode, deleteNode, renameNode };
//   };
  
//   export default useTraverseTree;

const useTraverseTree = () => {

  function insertNode(tree, id, name, isFolder) {
    if(tree.id === id && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: name,
        isFolder: isFolder,
        items: []
      })

      return tree
    }

    let latestNode = [];
    latestNode = tree.items.map((item) => {
      return insertNode(item, id, name, isFolder)
    })

    return {...tree, items: latestNode}
  }

  function renameNode() {

  }

  function deleteNode(tree, folderId) {

    if(tree.id === folderId && tree.isFolder) {
      return null;
    }

    let newList = []
    newList = tree.items.map((item) => deleteNode(item, folderId)).filter(Boolean);
    return {...tree, items: newList}

  }

  return {insertNode, deleteNode, renameNode}
}

export default useTraverseTree