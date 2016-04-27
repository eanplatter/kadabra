import shell from 'shelljs'
console.log('doing a thing')
shell.exec(process.argv[2])
const repeat = setInterval(() => {
  shell.exec("clear")
  shell.exec(process.argv[2])
}, process.argv[3])
