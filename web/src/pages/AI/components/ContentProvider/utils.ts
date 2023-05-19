export function extractOuterObject(jsonString: string) {
  const stack = []
  let start = -1
  let result = ''

  for (let i = 0; i < jsonString.length; i++) {
    if (jsonString[i] === '{') {
      if (stack.length === 0)
        start = i

      stack.push('{')
    }
    else if (jsonString[i] === '}') {
      stack.pop()
      if (stack.length === 0 && start !== -1) {
        result = jsonString.substring(start, i + 1)
        break
      }
    }
  }

  return JSON.parse(result)
}
