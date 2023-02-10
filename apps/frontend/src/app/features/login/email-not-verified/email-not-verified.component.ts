import { Component } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";
import { switchMap } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { take } from "rxjs/operators";
import { NotificationService } from "../../../shared/services/notification-service";

@Component({
  selector: "gif-lib-mono-repo-email-not-verified",
  templateUrl: "./email-not-verified.component.html",
  styleUrls: ["./email-not-verified.component.scss"],
})
export class EmailNotVerifiedComponent {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  public resendVerification(): void {
    this.angularFireAuth.authState.pipe(
      take(1),
      switchMap((user) => this.authService.verificationEmailResend(user))
    ).subscribe(() => this.notificationService.simpleNotification(
        "Verification email was resent"
      ), (err) => this.notificationService.simpleNotification(err)
    );
  }
}
