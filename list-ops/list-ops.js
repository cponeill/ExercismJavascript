class List {
  constructor(list) {
    this.list = list;
    this.list = new Array();
  }

  append(listArr) {
    // does not current work.
    if (listArr === []) {
      return [];
    }
    else {
      return this.list = listArr.push(listArr);
    }
  }
}

module.exports = List;