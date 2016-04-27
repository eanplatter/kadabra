import shell from 'shelljs'

console.log('dropped outa school now we done rich')

shell.exec(process.argv[2])
const repeat = setInterval(() => {
  shell.exec("clear")
  shell.exec(process.argv[2])
}, process.argv[3])
