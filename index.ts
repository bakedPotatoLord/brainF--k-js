import * as fs from "node:fs/promises"

function execute(char){
    if(char == '+'){
        arr[pointer] ++
    }else if(char == '-'){
        arr[pointer]--
    }else if(char == '>'){
        pointer++
    }else if(char == '<'){
        pointer--
    }else if(char == '.'){
       outArr.push(arr[pointer])  
    }else if(char == ','){
        arr[pointer] = inArr[inIndex]
				if(inArr[inIndex] == undefined) arr[pointer] = 0
				inIndex++
    }else if(char == '['){
        loopArr.push(instructionIndex)
    }else if(char == ']'){
			if(loopArr.length == 0) throw new Error("unmatched ]")
        if(arr[pointer] != 0){
            instructionIndex = loopArr[loopArr.length-1]
        }else{
            loopArr.pop()
        }
    }
}


var arr = Array.from(new Uint8ClampedArray(40000),x=>0)
var outArr:number[] = []
let pointer = 0
let loopArr:number[] = []
let instructionIndex = 0
var inIndex = 0

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

while(instructionIndex <= data.length){
		execute(data[instructionIndex])     
		instructionIndex++ 
}
console.log(arr)

if(loopArr.length != 0) throw new Error("unmatched [")

console.log(`pointer: ${pointer}, value: ${arr[pointer]}`)
console.log(new TextDecoder().decode(new Uint8ClampedArray(outArr)))
