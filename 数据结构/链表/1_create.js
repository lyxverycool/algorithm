//创建一个链表

function CreatListNode(val) {
  this.val = val
  this.next = null
}

let nodelist_1 = new CreatListNode(1)
nodelist_1.next = new CreatListNode(2)
nodelist_1.next.next = new CreatListNode(3)
nodelist_1.next.next.next = new CreatListNode(4)

let nodelist_2 = new CreatListNode(1)
nodelist_2.next = new CreatListNode(4)
nodelist_2.next.next = new CreatListNode(4)
nodelist_2.next.next.next = new CreatListNode(9)

module.exports = { CreatListNode, nodelist_1, nodelist_2 }