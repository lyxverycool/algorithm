const { CreatListNode, nodelist_1, nodelist_2 } = require('./1_create.js')
const printList = require('./2_printList.js')

function mergeList(l1, l2) {
  let head = new CreatListNode()
  let cur = head

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  cur.next = l1 != null ? l1 : l2

  return head.next
}

const list = mergeList(nodelist_1, nodelist_2)

console.log(printList(list))