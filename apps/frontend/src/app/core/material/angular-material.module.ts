import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyProgressBarModule as MatProgressBarModule } from "@angular/material/legacy-progress-bar";
import { MatLegacySliderModule as MatSliderModule } from "@angular/material/legacy-slider";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatLegacyChipsModule as MatChipsModule } from "@angular/material/legacy-chips";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatSliderModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatChipsModule,
    MatSelectModule,
  ],
})
export class AngularMaterialModule {}
