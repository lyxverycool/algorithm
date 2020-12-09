const { CreatListNode, nodelist_1, nodelist_2 } = require('./1_create.js')
const printList = require('./2_printList.js')

//想象有a.b两排扣子，我们用一条绳子穿过这些扣子，对n结点进行对比，如果a排 在n小于b则穿过b,三条线同时走，其中绳子每一步都在
//往前走，a或者b如果是小的就停滞不前。最后如果一条走完了，把另一条剩余的放到绳子上、

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
  cur.next = l1 ? l1 : l2
  return head.next
}

const list = mergeList(nodelist_1, nodelist_2)

console.log(printList(list))