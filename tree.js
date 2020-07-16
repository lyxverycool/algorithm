const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
      left: {
        val: "H"
      },
      right: {
        val: "I"
      }
    },
    right: {
      val: "E",
      left: {
        val: "J"
      },
      right: {
        val: "k"
      }
    }
  },
  right: {
    val: "C",
    left: {
      val: "F",
      left: {
        val: "L"
      },
      right: {
        val: "M"
      }
    },
    right: {
      val: "G",
      left: {
        val: "N"
      },
      right: {
        val: "O"
      }
    }
  }
}

// 前序遍历 根-左-右
function preorder(root, array = []) {
  // 递归边界，root 为空
  if (!root) {
    return
  }

  // 输出当前遍历的结点值
  array.push(root.val);
  // 递归遍历左子树 
  preorder(root.left, array)
  // 递归遍历右子树  
  preorder(root.right, array)
  return array
}

//中序遍历 左-根-右
function inorder(root, array = []) {
  if (root) {
    inorder(root.left, array);
    array.push(root.val);
    inorder(root.right, array);
  }
  return array;
};

//后序遍历 左-右-根
function afterorder(root, array = []) {
  if (root) {
    afterorder(root.left, array);
    afterorder(root.right, array);
    array.push(root.val);
  }
  return array;
};

//层次遍历
function BFS(root, array = []) {
  const queue = [] // 初始化队列queue
  // 根结点首先入队
  queue.push(root)
  // 队列不为空，说明没有遍历完全
  while (queue.length) {
    const top = queue[0] // 取出队头元素  
    // 访问 top
    array.push(top.val)
    // 如果左子树存在，左子树入队
    if (top.left) {
      queue.push(top.left)
    }
    // 如果左子树存在，右子树入队
    if (top.right) {
      queue.push(top.right)
    }
    queue.shift() // 访问完毕，队头元素出队
  }
  return array
}

function getMin(root) {
  while (root) {
    if (!root.left) {
      return root
    }
    root = root.left
  }
}

function getMax(root) {
  while (root) {
    if (!root.right) {
      return root
    }
    root = root.right
  }
}

function getDeep(root, deep) {
  deep = deep || 0
  if (!root) return deep
  deep++
  var dleft = getDeep(root.left, deep)
  var dright = getDeep(root.right, deep)
  return Math.max(dleft, dright)
}

function getNode(root, key) {
  while (root) {
    console.log(key > root.key)
    if (key < root.key) {
      console.log(111)
      return getNode(root.left, key)
    } else if (key > root.key) {
      return getNode(root.right, key)
    } else {
      return null
    }
  }
  return null
}

console.log(getNode(root, 'C'))
