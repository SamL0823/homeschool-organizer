import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; 
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public fireservices: AngularFirestore, private authservice: AuthService) { }

  userId: any = this.authservice.currentUserId;
  userRef: AngularFirestoreDocument<any> = this.fireservices.doc(`Users/${this.userId}`);

  create_NewUser(User){
    console.log(this.userId);
    return this.fireservices.collection('Users').add(User);
    
  }

  create_NewChild(child){
    console.log(child);
    
  }
}
