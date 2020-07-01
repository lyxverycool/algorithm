function climbStairs(n) {
  if (n == 1) return 1
  if (n == 2) return 2
  if (n == 3) return 3
  console.log(n)
  return climbStairs(n - 1) + climbStairs(n - 2)
}

console.log(climbStairs(6))