let x = { c: 4 }

let m = { a: x, b: 2 }

let n = m

x.c = 9

n = n.a

console.log(m)
console.log(n)