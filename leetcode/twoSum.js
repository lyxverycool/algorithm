const nums = [2, 11, 15, 7, 4], target = 9

const twoSum = (nums, target) => {
  const map = new Map()
  for (var i = 0; i < nums.length; i++) {
    const current = target - nums[i]
    if (map.has(current)) {
      return [map.get(current), i]
    }
    console.log(map)
    map.set(nums[i], i)
  }
}

console.log(twoSum(nums, target))