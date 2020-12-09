const { nodelist_2, CreatListNode } = require('./1_create.js')
const printList = require('./2_printList.js')

//翻转链表
function reverseList(head) {
  let pre = null;
  // 初始化目标结点为头结点
  let cur = head;
  // 只要目标结点不为 null，遍历就得继续
  while (cur !== null) {
    // 记录一下 next 结点
    let next = cur.next;
    // 反转指针
    cur.next = pre;
    // pre 往前走一步
    pre = cur;
    // cur往前走一步
    cur = next;
  }
  // 反转结束后，pre 就会变成新链表的头结点
  return pre
}

console.log(printList(reverseList(nodelist_2)))