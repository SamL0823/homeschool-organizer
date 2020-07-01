import { Child } from './child.model';
import { DataService } from './services/data.service';


export class User {
    private children: Child[];

    constructor(public email: string){}

    public getChildren() { 
        return this.children 
    }

    public addChildren(child: Child) { 
        this.children.push(child);
    }
}
