import shell from 'shelljs'
// 'sfdgsd'
shell.exec(process.argv[2], {silent: true})
const repeat = setInterval(() => {
  shell.exec("clear", {silent: true})
  shell.exec(process.argv[2], {silent: true})
}, process.argv[3])
