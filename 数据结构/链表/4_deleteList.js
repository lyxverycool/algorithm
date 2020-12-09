const { nodelist_2, CreatListNode } = require('./1_create.js')
const printList = require('./2_printList.js')

//删除重复的node
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


//删除所有重复的node
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
    console.log(printList(cur))
    console.log(printList(head))
  }
  return dummy.next
}


//删除第n个结点

//通过快慢指针，原理就是由于不知道链表的长度，所以要删除倒数n结点时，不知道删除那个结点，用两个指针就是为了定位n结点，
// 快指针先出发领先慢指针n个结点，然后两个再同时出发，到快指针走完时候，慢指针所处结点就是要删除的结点，我们删除即可。
function deleteListN(head, n) {
  let dummy = new CreatListNode()
  dummy.next = head
  let slow = dummy
  let fast = dummy
  while (n !== 0) {
    fast = fast.next
    n--
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}


const list = deleteListN(nodelist_2, 2)
console.log(printList(list))
