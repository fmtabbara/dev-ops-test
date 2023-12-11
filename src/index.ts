function greet(name: string) {
  return `Hello ${name}!`
}
const unused = 1
const greeting = greet(3)

console.log(greeting)

export default greet
