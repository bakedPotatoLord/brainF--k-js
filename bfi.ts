#!/usr/bin/env node
import { interpret } from "./main.js";
import * as fs from "node:fs/promises"

console.log("interpretation starting")

try{
  await fs.open('input.txt')
}catch(err){
  await fs.writeFile('input.txt','','ascii')
  console.log("automatically generated input.txt")
}
let inArr = Array.from(String(await fs.readFile('input.txt','ascii')).split(''),x=>x.charCodeAt(0))
try{
  var data = (await fs.readFile(process.argv[2],'utf-8')).split('')
}catch(err){
  throw new Error("path not found")
}

interpret(data,inArr)