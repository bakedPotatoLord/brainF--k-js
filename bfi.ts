#!/usr/bin/env node
import { interpret } from "./main";
import * as fs from "node:fs/promises"


console.log('\x1b[36m%s\x1b[0m',"BFInterpreter starting")

try{
  await fs.open('input.txt')
}catch(err){
  await fs.writeFile('input.txt','','ascii')
  console.log("\x1b[0m"+"Automatically generated input.txt")
}
let inArr:number[] = Array.from((await fs.readFile('input.txt','ascii')).split(''),x=>x.charCodeAt(0))
try{
  var data = (await fs.readFile(process.argv[2],'utf-8')).split('')
}catch(err){
  console.log("\x1b[31m"+"ERROR: must pass in program to execute\nex: bfi <path-to-program>")
  process.exit()
}

interpret(data,inArr)