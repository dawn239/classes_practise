class Teachers {
    constructor(name, department, experience) {
        this._name = name;
        this._department = department;
        this._experience = experience;
        this._remainingHolidays = 5;    //understroke denotes not to access and 
                                           //change directly, use getter method
    }

    get name() {
        return this._name;
    }

    get experience() {
        return this._experience;
    }

    get department() {
        return this._department;
    }

    incrementExperience() {
        this._experience++;
    }

    takeOffHoliday(numOfDays) {
        this._remainingHolidays = this._remainingHolidays - numOfDays;
    }
}

const mrSmith = new Teachers('Tom Smith', 'Maths', 4);
const missDavis = new Teachers('Sally Davis', 'French', 7);
const mrsMurray = new Teachers('Katie Murray', 'Art', 2);

console.log(mrSmith._name);
console.log(missDavis._department);
console.log(mrsMurray._experience);

