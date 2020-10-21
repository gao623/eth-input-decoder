const InputDataDecoder = require('ethereum-input-data-decoder');

class Decoder {
  constructor(abi) {
    this.decoder = new InputDataDecoder(abi);
    this.keywords = ['byte', 'int'];
  }
  decode(data) {
    let input = this.decoder.decodeData(data);
    let result = {method:input.method, types:input.types, args:{}};
    input.names.forEach((name, idx) => {
      let needConvert = this.keywords.some(keyword => {
        return input.types[idx].indexOf(keyword) >= 0;
      })
      if (needConvert);
      result.args[name] = input.inputs[idx].toString("hex");
    });
    return result
  }
}

module.exports = Decoder;
