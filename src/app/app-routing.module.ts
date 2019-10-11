import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabContentComponent } from './tab-content/tab-content.component';
import { StudentComponent } from './tab-content/student/student.component';
import { CompanyComponent } from './tab-content/company/company.component';
import { UniversityComponent } from './tab-content/university/university.component';
import { UnemployedComponent } from './tab-content/unemployed/unemployed.component';
import { RegisterTabComponent } from './register-tab/register-tab.component';


const routes: Routes = [
  { path:'student', component: StudentComponent },
  { path:'company', component: CompanyComponent },
  { path:'university', component: UniversityComponent },
  { path:'unemployed', component: UnemployedComponent },
  { path:'register', component: RegisterTabComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
