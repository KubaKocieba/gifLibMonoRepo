import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from "rxjs";
import { AuthService } from "../../../shared/services/auth.service";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: "mobile-navi-menu",
  templateUrl: "./mobile-navi-menu.component.html",
  styleUrls: ["./mobile-navi-menu.component.scss"],
})
export class MobileNaviMenuComponent implements OnInit {
  loggedIn$: Observable<User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.angularFireAuth.authState;
  }

  public logOut(): void {
    this.authService.signOut();
  }
}
