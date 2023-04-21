import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SmartfirstaidappComponent } from './smartfirstaidapp/smartfirstaidapp.component';
import{HealthprofileComponent} from './healthprofile/healthprofile.component';
import { DetailsComponent } from './details/details.component';
import { ReminderComponent } from './reminder/reminder.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: SmartfirstaidappComponent,
  },
  {
    path:"healthprofile",
    component: HealthprofileComponent,
  },
  {
    path:"details",
    component: DetailsComponent,
  },
  {
    path:"reminder",
    component: ReminderComponent,
  },
  {path:"**",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
