function climbStairs(n) {
  if (n == 1) return 1
  if (n == 2) return 2
  return climbStairs(n - 1) + climbStairs(n - 2)
}


function climbStairs_in(n) {
  if (n == 1) return 1
  if (n == 2) return 2
  let a = 1
  let b = 2
  let sum
  for (var i = 3; i <= n; i++) {
    sum = a + b
    a = b
    b = sum
  }
  return sum
}


console.log(climbStairs_in(7))