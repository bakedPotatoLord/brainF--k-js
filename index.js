import fs from 'fs'



fs.readFile(process.argv[2],'utf-8',(err,data)=>{
    if(err)console.log(err)
    console.log(data)

    let arr = Array.from(new Array(40000))
    let pointer = 0

    data = data.split('')
    for(i of data){
        if(i == '+'){
            arr[pointer]++
        }else if(i == '-'){
            arr[pointer]--
        }else if(i == '>'){
            pointer++
        }else if(i == '<'){
            pointer--
        }else if(i == '.'){
            arr[pointer]++
        }else if(i == ','){
            arr[pointer]++
        }else if(i == '['){
            arr[pointer]++
        }else if(i == ']'){
            arr[pointer]++
        }
    }
})

