
export const fakeApi = () => {
  return setTimeout(() => {
    return [{name: "chris", age: 35}, {name: "john", age: 25}]
  }, 1000)
}