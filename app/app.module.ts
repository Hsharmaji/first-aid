import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartfirstaidappComponent } from './smartfirstaidapp/smartfirstaidapp.component';
import { HealthprofileComponent } from './healthprofile/healthprofile.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ReminderComponent } from './reminder/reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartfirstaidappComponent,
    HealthprofileComponent,
    LoginComponent,
    DetailsComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
