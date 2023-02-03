import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { AuthService } from "../../shared/services/auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: "big-screen-navi",
  templateUrl: "./big-screen-navi.component.html",
  styleUrls: ["./big-screen-navi.component.scss"],
})
export class BigScreenNaviComponent implements OnInit {
  loggedIn$: Observable<User>;
  activeLink: string;

  constructor(
    private authService: AuthService,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.angularFireAuth.authState;
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map((data) => data.url.replace("/", ""))
      )
      .subscribe((link: string) => this.setLinkActive(link));
  }

  public logOut() {
    this.authService.signOut();
  }

  public setLinkActive(link: string) {
    this.activeLink = link;
  }
}
