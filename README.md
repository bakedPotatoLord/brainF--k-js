# brainf--k-js
CLI-based brainfuck interpreter.

## Why?
There is a lot of brainfuck interpreters on npm, but most of them either have unexpected results, or require you to either write your code inside of a .js file or use the fs module to pass it into the program. This package solves this problem by instead using a command line interface to smoothly run brainfuck code.

## Install
Install package globally with:

```shell
npm i  @bakedpotatolord/brainf--k -g
```
## Usage
  
- Write your program in any text or .bf file
- If nessesary, make an input.txt file, and put your input values into it
- Run your program with:
```shell
bfi <path_to_your_program>
```
