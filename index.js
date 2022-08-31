import fs from 'fs/promises'



await fs.readFile(process.argv[2])

let arr = Array.from(new Array(40000))