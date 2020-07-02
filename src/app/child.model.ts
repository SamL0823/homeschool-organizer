export class Child {
    public name: string;
    public grade: string;
    selected: boolean = false;

    constructor(name?: string, grade?: string) {
        this.name = name; 
        this.grade = grade;
    
    }
}