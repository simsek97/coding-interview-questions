/**
 * This function returns the lowest common ancestor of two given nodes in a binary search tree
 * @param root
 * @param node1
 * @param node2
 * @return
 */
function lowestCommonAncestor(root, node1, node2) {
  if (root.value === null) {
    return null;
  }

  if (root.value > node1 && root.value > node2) {
    // if the root value is greater than both nodes
    // then lowest common ancestor should be on the right tree
    lowestCommonAncestor(root.left, node1, node2);
  } else if (root.value < node1 && root.value < node2) {
    // if the root value is less than both nodes
    // then lowest common ancestor should be on the left tree
    lowestCommonAncestor(root.right, node1, node2);
  } else {
    // If the root value is greater than one node and less than the other node
    // then this should be the lowest common ancestor
    // return it
    return root;
  }
}
