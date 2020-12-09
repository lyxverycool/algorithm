// let n = { val: 4, next: { val: 5, next: { val: 7 } } }

// let m = n


// m.next = m.next.val
// console.log(n)

// console.log(m)

const m = '[{"id":"3","type":"block","data":{"value":""},"style":{"0":1,"1":"absolute","2":"100 % ","3":0,"4":0,"5":375,"6":667,"7":1,"16":"rgba(133, 65, 65, 1)","18":14},"children":[{"id":"3_4","type":"block","data":{"value":""},"style":{"0":1,"1":"relative","2":"100 % ","3":0,"4":0,"5":375,"6":100,"7":1,"16":"#ccc","18":14},"children":[],"parentId":"3"},{"id":"3_6","type":"text","data":{"value":"新增文本"},"style":{"0":1,"1":"relative","2":"100 % ","3":21,"4":11,"5":375,"6":"auto","7":1,"18":14,"22":"#000","31":"inline - block"},"children":[],"parentId":"3"}],"parentId":" - 1"}]'

console.log(JSON.parse(m))