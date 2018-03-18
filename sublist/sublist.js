class List {
  constructor(listOne, listTwo) {
    // create to empty lists.
    this.listOne = listOne;
    this.listTwo = listTwo;

    this.listOne = new Array();
    this.listTwo = new Array();
  }

  compare() {
    // compare the two lists.
    if (this.listOne.length < this.listTwo.length) {
      return 'SUBLIST';
    } else if (this.listOne.length < this.listTwo.length) {
      return 'SUPERLIST';
    }
    else {
      return 'EQUAL';
    }
  }
}

module.exports = List;