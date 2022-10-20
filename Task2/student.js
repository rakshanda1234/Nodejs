class student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minPlacementAge) {
    console.log(this);
    return (minMarks) => {
      //console.log("inside egligibleForCurrentCompany", this);
      if (this.marks > minMarks && this.age > minPlacementAge) {
        console.log(this.name + " is ready for placements");
      } else {
        console.log(this.name + " is not ready for placements");
      }
    };
  }
}

const Rakshanda = new student("Rakshanda", 27, 60);
const Chetan = new student("Chetan", 28, 35);

Rakshanda.setPlacementAge(18)(40);
Chetan.setPlacementAge(28)(35);
