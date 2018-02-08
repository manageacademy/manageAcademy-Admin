import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StarterComponent} from './starter/starter.component';
import {StarterHeaderComponent} from './starter/starter-header/starter-header.component';
import {StarterLeftSideComponent} from './starter/starter-left-side/starter-left-side.component';
import {StarterContentComponent} from './starter/starter-content/starter-content.component';
import {StarterFooterComponent} from './starter/starter-footer/starter-footer.component';
import {StarterControlSidebarComponent} from './starter/starter-control-sidebar/starter-control-sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material';
import {CreateNewFeatureComponent} from './components/create-new-feature/create-new-feature.component';
import {CreateNewFeatureService} from './components/create-new-feature/create-new-feature.service';
import {CreateNewFeatureControlComponent} from './components/create-new-feature-control/create-new-feature-control.component';
import {CreateNewFeatureControlService} from './components/create-new-feature-control/create-new-feature-control.service';
import {MaFormControllerComponent} from './components/ma-form-controller/ma-form-controller.component';

@NgModule({
    declarations: [
        AppComponent,
        StarterComponent,
        StarterHeaderComponent,
        StarterLeftSideComponent,
        StarterContentComponent,
        StarterFooterComponent,
        StarterControlSidebarComponent,
        CreateNewFeatureComponent,
        CreateNewFeatureControlComponent,
        MaFormControllerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,

        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    providers: [CreateNewFeatureService, CreateNewFeatureControlService],
    bootstrap: [AppComponent],

    entryComponents: [
        CreateNewFeatureComponent,
        CreateNewFeatureControlComponent,
        MaFormControllerComponent
    ]
})
export class AppModule {
}
