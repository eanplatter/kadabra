import shell from 'shelljs'

shell.exec(process.argv[2])
const repeat = setInterval(() => {
  shell.exec("clear", {silent:true})
  shell.exec(process.argv[2], {silent:true})
}, process.argv[3])
