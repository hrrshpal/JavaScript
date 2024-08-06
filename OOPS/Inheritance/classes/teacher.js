const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, age, subject, yearsOfExperience){
    super(firstName, lastName, age)
    this.subject = subject
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers){
    let combinedYears = 0
    for(let i=0; i<teachers.length; i++){
      combinedYears += teachers[i].yearsOfExperience
    }
    return combinedYears
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
