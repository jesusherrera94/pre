import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit () {
    firebase.initializeApp({
      apiKey: "AIzaSyAeiWycotvZUVx3NMaLoISomsClwgg__9g",
      authDomain: "comprasapp-b8a6b.firebaseapp.com",
      databaseURL: "https://comprasapp-b8a6b.firebaseio.com",
      projectId: "comprasapp-b8a6b",
      storageBucket: "comprasapp-b8a6b.appspot.com",
      messagingSenderId: "165137619000"
    });
    }
}
