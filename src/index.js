import shell from 'shelljs'
shell.exec(process.argv[2])
const repeat = setInterval(() => {
  shell.exec("clear")
  shell.exec(process.argv[2])
}, process.argv[3])
