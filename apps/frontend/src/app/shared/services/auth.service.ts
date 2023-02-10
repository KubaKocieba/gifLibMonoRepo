import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { forkJoin, from, Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { LoginErrorComponent } from "../../features/login/error/login-error/login-error.component";
import { NotificationService } from "./notification-service";
import { AngularFirestore, DocumentSnapshot } from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth"
import { sendEmailVerification } from "@angular/fire/auth";
import firebase from "firebase/compat";
import User = firebase.User;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private firestore: AngularFirestore,
    private notificationService: NotificationService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  public signInByEmailAndPass(email: string, password: string): void {
    const firebaseShot = this.createLibraryIfNotExistingForUser();
    const auth = getAuth();

    from(signInWithEmailAndPassword(auth, email, password))
      .pipe(
        map(({ user }) => user.uid),
        switchMap((userId: string) => firebaseShot(userId))
      )
      .subscribe(
        () => this.goToSearch(),
        (msg) => this.signInError(msg)
      );
  }

  public googleSignIn(): void {
    const firebaseShot = this.createLibraryIfNotExistingForUser();
    const auth = getAuth();
    const provider = new GoogleAuthProvider()

    from(
      signInWithPopup(
        auth,
        provider
      )
    )
      .pipe(
        map(({ user }) => user.uid),
        switchMap((userId: string) => firebaseShot(userId))
      )
      .subscribe(() => this.goToSearch());
  }

  public facebookSignIn(): void {
    const firebaseShot = this.createLibraryIfNotExistingForUser();
    const auth = getAuth();
    const provider = new FacebookAuthProvider();

    from(
      signInWithPopup(
        auth,
        provider
      )
    )
      .pipe(
        map(({ user }) => user.uid),
        switchMap((userId: string) => firebaseShot(userId))
      )
      .subscribe(() => this.goToSearch());
  }

  public goToSearch(): void {
    this.ngZone.run(() => {
      this.router.navigate(["search"]);
    });
  }

  public signOut(): void {
    const auth = getAuth();

    signOut(auth).then(() => this.router.navigate(["signIn"]));
  }

  public createUser(email: string, password: string): void {
    const firebaseShot = this.createLibraryIfNotExistingForUser();
    const sendVerification = (user) => this.verificationEmailResend(user);
    const auth = getAuth();

    from(createUserWithEmailAndPassword(auth, email, password))
      .pipe(
        switchMap(({ user }) => {
          return forkJoin(sendVerification(user), firebaseShot(user.uid))
        })
      )
      .subscribe(
        () => {
          this.notificationService.simpleNotification(
            "Verification email sent"
          );
          this.router.navigate(["signIn"]);
        },
        (msg) => this.signInError(msg)
      );
  }

  public signInError(msg): void {
    this.notificationService.notificationWithGif(LoginErrorComponent, {
      data: msg,
      duration: 8000,
    });
  }

  public sendResetPassword(email: string): void {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email).then(() => this.resetPassNotification());
  }

  public verificationEmailResend(user: User): any {
    return from(sendEmailVerification(user));
  }

  public noPassResetEmail(): void {
    this.notificationService.simpleNotification("Please fill email");
  }

  private resetPassNotification(): void {
    this.notificationService.simpleNotification(
      "Password reset email sent, check your inbox."
    );
  }

  private createLibraryIfNotExistingForUser() {
    return (
      userId: string
    ): Observable<void> =>
      this.firestore
        .doc<unknown>("users/" + userId)
        .get()
        .pipe(
          switchMap(
            (data: DocumentSnapshot<unknown>) => {
              if (data.data()) {
                return of(null);
              } else {
                return from(
                  this.firestore.firestore
                    .batch()
                    .set(this.firestore.firestore.doc("users/" + userId), {
                      library: {},
                    })
                    .commit()
                );
              }
            }
          )
        );
  }
}
