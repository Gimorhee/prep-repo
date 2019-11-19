class Student {
    fullName: string;
    
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Danny", lastName: "Rhee"};

document.body.textContent = greeter(user);

// ------------------------------------------------------------------- //

let notSure : any; notSure = 3;
let isDone : boolean = false;
let list : number[] = [ 1, 2, 3];
let x : [string, number] = ["1", 2];
enum Color { Red = 1, Green, Yellow }
let c : Color = Color.Red;
let colorName : string = Color[2];

declare function create(o: object | null) : void;
create({ pop: 0 });
create(null);

let someValue : any = "This is String";
let strLength1 : number = (<string>someValue).length;
let strLength2 : number = (someValue as string).length;
