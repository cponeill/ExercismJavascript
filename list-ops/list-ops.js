class List {
  constructor(values) {
    this.values = values || [];
  }

  append(listArr) {
    listArr.values.forEach(value => {
      this.values[this.values.length] = value;
    });
    return this;
  }

  concat(listArr) {
    return this.append(listArr);
  }

  filter(func) {
    let result = [];

    this.values.forEach(value => {
      if (func(value)) {
        result[result.length] = value;
      }
    });
    this.values = result;
    return this;
  }

  length() {
    let count = 0;
    this.values.forEach(() => count++);

    return count;
  }

  map(func) {
    let result = [];

    this.values.forEach(value => {
      return result[result.length] = func(value);
    });
    this.values = result;
    return this;
  }

  foldl(func, num) {
    let result = num;

    for (let i = 0; i < this.values.length; i++) {
      result = func(this.values[i], result);
    }

    return result;
  }

  foldr(func, num) {
    let result = num;

    for (let i = this.values.length - 1; i >= 0; i--) {
      result = func(this.values[i], result);
    }

    return result;
  }

  reverse() {
    let result = [];

    for (let i = this.values.length - 1; i >= 0; i--) {
      result[result.length] = this.values[i];
    }

    this.values = result;
    return this;
  }
}

module.exports = List;