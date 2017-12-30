class School {
  constructor() {
    // Create an empty student object and array.
    this.studentObj = {};
  }

  roster() {
    // Return the roster for that grade level.
    return this.studentObj;
  }

  add(student, grade) {
    // Use a conditional to push students to the same grade level.
    if (grade in this.studentObj) {
      this.studentObj[grade].push(student);
      this.studentObj[grade].sort();
    } 
    else {
      return this.studentObj[grade] = [student]
    }
  }

  grade(results) {
    // Return grade results or an empty array.
    return this.studentObj[results] || [];
  }
}

module.exports = School;