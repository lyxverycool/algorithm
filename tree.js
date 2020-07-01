// 所有遍历函数的入参都是树的根结点对象
const start = new Date().getTime()
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


function inorder(root, array = []) {
  if (root) {
    inorder(root.left, array);
    array.push(root.val);
    inorder(root.right, array);
  }
  return array;
};


function afterorder(root, array = []) {
  if (root) {
    afterorder(root.left, array);
    afterorder(root.right, array);
    array.push(root.val);
  }
  return array;
};

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
        val: "Q"
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
};

console.log(afterorder(root))
const end = new Date().getTime()

console.log(end - start)