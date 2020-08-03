const { nodelist_2, CreatListNode } = require('./1_create.js')
const printList = require('./2_printList.js')

function deleteList(head) {
  let cur = head
  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}


function deleteListAll(head) {
  if (!head || !head.next) {
    return head
  }
  let dummy = new CreatListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val == cur.next.next.val) {
      let val = cur.next.val
      while (cur.next && cur.next.val == val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}


const list = deleteListAll(nodelist_2)
console.log(printList(list))
