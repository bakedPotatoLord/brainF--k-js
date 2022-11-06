# brainf--k-js
CLI-based brainfuck interpreter.

## Why?
There is a lot of brainfuck interpreters on npm, but most of them either have unexpected results, or require you to either write your code inside of a .js file or use the fs module to pass it into the program. This package solves this problem by instead using a command line interface to smoothly run brainfuck code.

## Usage
<ol>
  <li>Install package globally by running:

  `npm i  @bakedpotatolord/brainf--k -g`
  </li>
  <li>Write your program </li>
  <li>If nessesary, make an input.txt file, and put your input values into it</li>
  <li>Run your program with:
  
  `bfi <path_to_your_program>`
  </li>
<ol>