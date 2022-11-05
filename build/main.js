let arr = Array.from(new Uint8ClampedArray(40000), x => 0);
let outArr = [];
let pointer = 0;
let loopArr = [];
let instructionIndex = 0;
let inIndex = 0;
function execute(char, inArr) {
    if (char == '+') {
        arr[pointer]++;
    }
    else if (char == '-') {
        arr[pointer]--;
    }
    else if (char == '>') {
        pointer++;
    }
    else if (char == '<') {
        pointer--;
    }
    else if (char == '.') {
        outArr.push(arr[pointer]);
    }
    else if (char == ',') {
        arr[pointer] = inArr[inIndex];
        if (inArr[inIndex] == undefined)
            arr[pointer] = 0;
        inIndex++;
    }
    else if (char == '[') {
        loopArr.push(instructionIndex);
    }
    else if (char == ']') {
        if (loopArr.length == 0) {
            console.log("\x1b[31m", "ERROR: unmatched ]");
            process.exit();
        }
        if (arr[pointer] != 0) {
            instructionIndex = loopArr[loopArr.length - 1];
        }
        else {
            loopArr.pop();
        }
    }
}
export async function interpret(program, inputArr) {
    while (instructionIndex <= program.length) {
        execute(program[instructionIndex], inputArr);
        instructionIndex++;
    }
    console.log("\x1b[0m", "interpretation completed");
    console.log("Memory Dump:", arr);
    console.log(`Pointer: ${pointer}, Value: ${arr[pointer]}`);
    console.log(`\nOutput: ${new TextDecoder().decode(new Uint8ClampedArray(outArr))}`);
}
