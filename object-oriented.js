// Task 1: Code a Person class
class person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    dosomethingFun() {
        this.energy += 10;
        console.log('Energy is increasing, currently at:', this.energy)
    }
}

// Task 2: Code a Worker class
class Worker extends person{
    constructor(name,age,energy,xp = 0, hourlywage = 10) {
            super(name, age, energy);
            this.xp = xp;
            this.hourlywage = hourlywage;
        }
    goToWork() {
        this.xp += 10;
        console.log( this.xp)
        }
    }

// Task 3: Code an intern object, run methods
function intern() {
    newIntern = new Worker("Bob", 21, 110, 0, 10);
        newIntern.goToWork();
        return newIntern;
    }

// Task 4: Code a manager object, methods
function manager() {
     newManager = new Worker("Alice", 30, 120, 100, 30);
        newManager.dosomethingFun();
        return newManager;
        
    }
