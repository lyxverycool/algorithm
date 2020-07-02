const string = "{{[[]]}3"

const validParentheses = (string) => {
  const mapper = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  const left_arr = ['{', '[', '(']
  const stack = []
  for (var i in string) {
    if (left_arr.includes(string[i])) {
      stack.push(string[i])
    } else {
      const key = stack.pop()
      if (string[i] != mapper[key]) {
        return false
      }
    }
  }
  if (stack.length > 0) return false
  return true
}

console.log(validParentheses(string))