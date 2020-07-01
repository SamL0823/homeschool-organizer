import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; 
import { AuthService } from '../services/auth.service';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public fireservices: AngularFirestore) { }

  currentDocId: number = 0;
  docRef: string; 
  currentUser: User;

  create_NewUser(user: User){
    this.currentUser = user;
    this.currentDocId++;
    return this.fireservices.collection('Users').doc(`${this.currentDocId}`).set({
      email: this.currentUser.email
    })
  }

  create_NewChild(child){
    // return this.fireservices.collection('Users').doc(`${this.currentUser.email}`).set({
      
    // })
  }
}
