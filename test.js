const n = { b: 4, c: { d: 4 } }
function m(a) {
  let x = { ...a }
  x.b = 2
  x.c.d = 8
  console.log(x)
}

m(n)

console.log(n)