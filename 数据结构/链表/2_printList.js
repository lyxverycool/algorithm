// 从尾到头打印一个链表

const { nodelist_1 } = require('./1_create.js')

function printList(listNode) {
  const arr = []
  while (listNode) {
    arr.push(listNode.val)
    listNode = listNode.next
  }
  return arr
}

//console.log(printList(nodelist_1))

module.exports = printList