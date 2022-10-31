import { interpret } from "./index.js";
import * as fs from "node:fs/promises"

try{
  await fs.open('input.txt')
}catch(err){
  await fs.writeFile('input.txt','','ascii')
}
var inArr = Array.from(String(await fs.readFile('input.txt','ascii')).split(''),x=>x.charCodeAt(0))
try{
  var data = (await fs.readFile(process.argv[2],'utf-8')).split('')
}catch(err){
  throw new Error("specify bf file to run")
}

interpret(data,inArr)