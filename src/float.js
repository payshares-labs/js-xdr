import {isNumber} from 'lodash';

export var Float = {

  read(io) {
    return io.readFloatBE();
  },

  write(value, io) {
    if(!isNumber(value)){ 
      throw new Error("XDR Write Error: not a number");
    }

    io.writeFloatBE(value);
  },

  isValid(value) {
    return isNumber(value);
  },
};