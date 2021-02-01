/**
 * 
 * @param {*number[]} A 
 * @param {number} K 
 * @return {number[]}
 */


function getSumArray(A, K) {
  const k_arr = `${K}`.split('')
  let k_arr_l = k_arr.length - 1
  let a_arr_l = A.length - 1
  let sur_plus = 0
  let result = []
  while (a_arr_l >= 0 || k_arr_l >= 0) {
    const k_num = parseInt(k_arr[k_arr_l]) || 0
    const a_num = A[a_arr_l] || 0
    const sum_num = k_num + a_num + sur_plus
    if (sum_num > 9) {
      result.push(sum_num - 10)
      sur_plus = 1
    } else {
      result.push(sum_num)
      sur_plus = 0
    }
    k_arr_l--
    a_arr_l--
  }
  if (sur_plus > 0) result.push(sur_plus)
  return result.reverse()
}
