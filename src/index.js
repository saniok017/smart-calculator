class SmartCalculator {
  constructor(initialValue) {
    this.value = +initialValue;
  }

  add(number) {
    this.value +="+" +number;
    return this;
  }
  
  subtract(number) {
    this.value +="-" +number;
    return this;
  }

  multiply(number) {
    this.value += "*" +number;
    return this;
  }

  devide(number) {
    this.value += "/" +number;
    return this;
  }

  pow(number) {
    this.value +="**" +number;
    return this;
  }
  // using eval is not so evil after all... ;-)
  toString() {
    return eval(this.value);
  }
}

module.exports = SmartCalculator;