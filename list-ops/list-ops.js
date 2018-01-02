class List {
  constructor(list) {
    this.list = list;
    this.list = new Array();
  }

  append(listArr) {
    // does not current work.
    if (listArr === [] || listArr === undefined || listArr === '') {
      return [];
    }
    else {
      return this.list = listArr.push(listArr);
    }
  }
  // Could try the following:
  // return listArr.push(listArr) || [];
  // return this.list.push(listArr) || [];
  // return this.list.push(listArr) || this.list;
}

module.exports = List;