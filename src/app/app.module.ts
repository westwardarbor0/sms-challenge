import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule,MatDatepickerModule,MatFormFieldModule,MatSortModule,MatChipsModule,MatInputModule,MatSelectModule,MatTooltipModule,MatSnackBarModule,MatTabsModule,MatSidenavModule,MatIconModule,MatButtonModule } from '@angular/material';
import { JsonTableComponent } from './json-table/json-table.component';
import { FormValidationComponent } from './form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    JsonTableComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatSortModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
