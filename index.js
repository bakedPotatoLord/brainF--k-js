import fs from 'fs/promises'

function execute(char){
    if(char == '+'){
        arr[pointer]++
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
        loopArr.push(pointer)
    }else if(char == ']'){
        if(arr[pointer] != 0){
            pointer = loopArr[loopArr.length-1]
            loopArr.pop()
        }else{
            
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

try{
    await fs.open('input.txt')
}catch(err){
    throw new Error('cannot find input.txt')
}
var inIndex = 0
var inArr = await fs.readFile(process.argv[2],'utf-8')
var data = await fs.readFile(process.argv[2],'utf-8')
    if(!getFileExtension(process.argv[2])== 'bf' || !getFileExtension(process.argv[2])== 'b') throw new Error('filename must end in .b or .bf')

    data = data.split('')
    for(let i of data){
        execute(i)
    }
    console.log(arr)

