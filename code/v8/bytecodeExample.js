function incrementX(obj) {
    return 1 + obj.x;
  }
incrementX({x: 42});

//node --print-bytecode --print-bytecode-filter=incrementX  bytecodeExample.js  