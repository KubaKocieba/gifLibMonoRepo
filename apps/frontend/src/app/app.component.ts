import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { Observable } from "rxjs";
import { AuthService } from "./shared/services/auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  libraryOpened = false;
  mobileNaviSidenavOpened = false;
  loggedIn$: Observable<User>;
  isMobile = /android/i.test(navigator.userAgent) || /iPad|iPhone|iPod/.test(navigator.userAgent);


  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {}

  ngOnInit() {
    this.loggedIn$ = this.angularFireAuth.authState;
  }

  public toggleMobileNaviSideNav(): void {
    if (this.libraryOpened) {
      this.toggleLibrarySideNav();
    }
    this.mobileNaviSidenavOpened = !this.mobileNaviSidenavOpened;
  }

  public toggleLibrarySideNav(): void {
    if (this.mobileNaviSidenavOpened) {
      this.toggleMobileNaviSideNav();
    }

    this.libraryOpened = !this.libraryOpened;
  }
}
