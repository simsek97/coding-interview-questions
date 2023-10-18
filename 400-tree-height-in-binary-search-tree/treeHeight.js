/**
 *
 * @param {Node} root
 * @returns
 */
function heightOfTree(root) {
  if (root === null) {
    return -1;
  }

  const leftHeight = heightOfTree(root.left);
  const rightHeight = heightOfTree(root.right);

  return Math.max((leftHeight, rightHeight)) + 1;
}
