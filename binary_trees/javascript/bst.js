function TreeNode(data, left, right) {
  this.data = data;
  this.left =  left ||null;
  this.right =  right || null;
}

function BST(rootNode) {
  this.rootNode = rootNode || null;
}

BST.prototype.push = function(data) {
  let newNode = new TreeNode(data);
  if (this.rootNode === null) {
     this.rootNode = newNode;
   } else if (this.rootNode.data > data) {
     this.rootNode.left = newNode;
   }
};
