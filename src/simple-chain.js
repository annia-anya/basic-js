const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      if (value === undefined) {
          this.chain.push('');
      } else {
          this.chain.push(value);
      }
      return this;
  },
  reverseChain() {
      this.chain = this.chain.reverse();
      return this;
  },
  removeLink(position) {
      if (position > 0 && position <= this.chain.length) {
          this.chain = this.chain.filter((_, index) => index != position - 1);
      } else {
          this.chain = [];
          throw new Error();
      }
      return this;
  },
  finishChain() {
      const result = this.chain.map((x) => `( ${x} )`).join('~~');
      this.chain = [];
      return result;
  }
};

module.exports = chainMaker;
