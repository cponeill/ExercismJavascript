// Creating pascals-triangle.js module

var Triangle = function(numRows) {
  this.rows = [];
  var row = [1];
  for (var i = 0; i < numRows; i++ ) {
    this.rows.push(row);
    this.lastRow = row;
    row = nextRow(row);
  }
};

function nextRow(curRow) {
  var row = [];
  var prev = 0;
  for (var j = 0; j < curRow.length; j++) {
    row.push(curRow[j] + prev);
    prev = curRow[j];
  }
  row.push(prev);
  return row;
}

module.exports = Triangle;