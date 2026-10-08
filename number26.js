class Student {
    name() { return "Irvy"; }
    course() { return "BSCS"; }
    year() { return  3; }
}

let a = new Student();
let b = new Student();

console.log(`${a.name()}`);
console.log(`${a.course()}`);
console.log(`${b.year()}`);

