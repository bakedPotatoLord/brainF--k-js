import fs from 'fs/promises'

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
        inIndex++
    }else if(char == '['){
        loopArr.push(instructionIndex)
    }else if(char == ']'){
        if(arr[pointer] != 0){
            instructionIndex = loopArr[loopArr.length-1]
        }else{
            loopArr.pop()
        }
    }
}

function getFileExtension(filename) {
    return  filename.split('.').pop();
}

var arr = Array.from(new Uint8ClampedArray(40000),x=>0)
var outArr = []
let pointer = 0
let loopArr = []
let instructionIndex = 0

try{
    await fs.open('input.txt')
}catch(err){
    await fs.writeFile('input.txt','','ascii')
}
var inIndex = 0
var inArr = await fs.readFile(process.argv[2],'utf-8')
var data = await fs.readFile(process.argv[2],'utf-8')
    if(!getFileExtension(process.argv[2])== 'bf' || !getFileExtension(process.argv[2])== 'b') throw new Error('filename must end in .b or .bf')

    data = data.split('')
    while(instructionIndex <= data.length){
        execute(data[instructionIndex])
        instructionIndex++
    }
    console.log(arr)

await fs.writeFile('output.txt',new Uint8Array(outArr) ,'ascii')
