
	/*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static int height(Node root) {
      	// Write your code here.
        if(root == null) {
            return -1;
        }
        int left = height(root.left);
        int right = height(root.right);

        if(left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    void levelOrder(Node root) {
      Queue<Node> queue=new LinkedList<>();
      queue.add(root);
  
      while(!queue.isEmpty()) {
          Node tempNode=queue.poll();
          System.out.print(tempNode.data+" ");
          if(tempNode.left!=null)
              queue.add(tempNode.left);
          if(tempNode.right!=null)
              queue.add(tempNode.right);
      } 
  }