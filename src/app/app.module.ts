import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { StudentComponent } from './tab-content/student/student.component';
import { CompanyComponent } from './tab-content/company/company.component';
import { UniversityComponent } from './tab-content/university/university.component';
import { UnemployedComponent } from './tab-content/unemployed/unemployed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterTabComponent } from './register-tab/register-tab.component';
@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    StudentComponent,
    CompanyComponent,
    UniversityComponent,
    UnemployedComponent,
    RegisterTabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
